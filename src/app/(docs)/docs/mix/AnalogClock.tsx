"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Task = {
  hour: number
  task: string
}

type ClockHandProps = {
  rotation: number
  length: number
  width: number
  color: string
}

const ClockHand: React.FC<ClockHandProps> = ({ rotation, length, width, color }) => (
  <motion.div
    className="absolute bottom-1/2 left-1/2 origin-bottom"
    style={{
      height: `${length}%`,
      width: `${width}px`,
      backgroundColor: color,
      rotate: rotation,
    }}
    animate={{ rotate: rotation }}
    transition={{ type: 'spring', stiffness: 100, damping: 10 }}
  />
)

const TaskModal: React.FC<{ isOpen: boolean; onClose: () => void; onSave: (task: string) => void; hour: number }> = ({ 
  isOpen, 
  onClose, 
  onSave, 
  hour 
}) => {
  const [task, setTask] = useState('')

  const handleSave = () => {
    if (task.trim()) {
      onSave(task)
      setTask('')
      onClose()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'Enter') handleSave()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <AnimatePresence>
        <motion.div 
          className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl"
          onClick={e => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        >
          <h2 className="text-xl font-bold mb-4">Add Task for {hour}:00</h2>
          <p className="text-gray-600 mb-4">Enter a task for this hour.</p>
          
          <div className="mb-4">
            <label htmlFor="task" className="block text-sm font-medium text-gray-700 mb-1">
              Task
            </label>
            <input
              id="task"
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your task here"
              autoFocus
            />
          </div>
          
          <div className="flex justify-end gap-2">
            <button 
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Save task
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default function AnalogClock() {
  const [time, setTime] = useState(new Date())
  const [tasks, setTasks] = useState<Task[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedHour, setSelectedHour] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const hours = time.getHours() % 12
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  const hourRotation = (hours + minutes / 60) * 30
  const minuteRotation = (minutes + seconds / 60) * 6
  const secondRotation = seconds * 6

  const handleHourClick = (hour: number) => {
    setSelectedHour(hour)
    setModalOpen(true)
  }

  const handleSaveTask = (task: string) => {
    setTasks([...tasks, { hour: selectedHour, task }])
  }

  // Display tasks for the current hour
  const currentHourTasks = tasks.filter(task => task.hour === (hours === 0 ? 12 : hours));

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-64 h-64 rounded-full border-4 border-gray-800 bg-white shadow-lg">
        {/* Clock numbers */}
        {[...Array(12)].map((_, i) => {
          const hour = i + 1;
          const angle = (hour * 30 * Math.PI) / 180
          const x = Math.sin(angle) * 110 + 128
          const y = -Math.cos(angle) * 110 + 128
          
          // Check if this hour has tasks
          const hasTask = tasks.some(task => task.hour === hour);
          
          return (
            <motion.div
              key={i}
              className={`absolute w-8 h-8 flex items-center justify-center cursor-pointer rounded-full
                ${hasTask ? 'bg-blue-100 text-blue-800 font-bold' : ''}`}
              style={{ left: `${x - 16}px`, top: `${y - 16}px` }}
              whileHover={{ scale: 1.2, backgroundColor: '#e0f2fe' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleHourClick(hour)}
            >
              {hour}
            </motion.div>
          )
        })}
        
        {/* Clock hands */}
        <ClockHand rotation={hourRotation} length={50} width={6} color="#1e293b" />
        <ClockHand rotation={minuteRotation} length={70} width={4} color="#3b82f6" />
        <ClockHand rotation={secondRotation} length={80} width={2} color="#ef4444" />
        
        {/* Center dot */}
        <div className="absolute w-4 h-4 bg-black rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Current hour tasks */}
      {currentHourTasks.length > 0 && (
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 w-64">
          <h3 className="font-bold text-blue-800 mb-2">Current Hour Tasks:</h3>
          <ul className="list-disc pl-5">
            {currentHourTasks.map((task, index) => (
              <li key={index} className="text-blue-700">{task.task}</li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Task Modal */}
      <TaskModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSaveTask}
        hour={selectedHour}
      />
    </div>
  )
}
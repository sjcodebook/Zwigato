export default function CategoryBtn({ icon, label, active = false }) {
  return (
    <button
      className={`flex flex-col items-center justify-center w-full py-3 px-2 border rounded-lg transition-colors ${
        active ? 'bg-[#EEF1FF] border-[#4263EB]' : 'border-gray-200 bg-white hover:bg-gray-50'
      }`}>
      <span className='text-xl mb-1 md:text-2xl'>{icon}</span>
      <span
        className={`text-xs md:text-sm ${
          active ? 'text-[#4263EB] font-medium' : 'text-neutral-700'
        }`}>
        {label}
      </span>
    </button>
  )
}

export default function InputDefault({ type = "text", placeholder, hasOutline }) {
    return (
        <input
            className={`font-roboto bg-dark-blue-2 w-full h-12 pl-4 text-slate-200 rounded-sm outline-none ${hasOutline ? 'outline-none focus:border focus:border-purple-alert' : ''}`}
            type={type}
            placeholder={placeholder}
        />
    )
}

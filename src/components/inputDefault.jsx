export default function InputDefault({type = "text", placeholder}) {
    return(
        <input 
            className="bg-dark-blue-2 h-12 pl-4 text-slate-200 outline-none focus:border focus:border-purple-alert rounded-sm"
            type={type}
            placeholder={placeholder}/>
    )
}
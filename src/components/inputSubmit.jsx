export default function InputSubmit({value}){
    return(
        <input className="text-slate-200 bg-purple-btn px-4 py-2 rounded w-full cursor-pointer hover:bg-purple-alert transition-all duration-200 font-anton text-2xl" type="submit" value={value} />
    )
}
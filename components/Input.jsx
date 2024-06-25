export const Input = ({ label, type, placeholder, value, onChange, errMsg, max, name }) => {
    return (
        <>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                {label}
            </label>
            <input type={type} placeholder={placeholder} maxLength={max} name={name} value={value} onChange={(e) => onChange(e)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
            <p className='text-red-500'>{errMsg}</p>
        </>
    )
}
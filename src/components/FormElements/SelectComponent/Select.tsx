'use client'

type OptionType = {
    label: string,
    id: string
}

type SelectProps = {
    label: string,
    value: string,
    onChange: Function,
    options: OptionType[]
}

const Select = ({
    label,
    value,
    onChange = () => { },
    options = []
}: SelectProps) => {
    return (
        <div className="relative">
            <p className="
                pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                absolute bg-white">
                {label}
            </p>
            <select
                className="
                border placeholder-gray-400 focus:outline-none focus:border-black w-full
                pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300
                rounded-md"
                value={value}
                onChange={() => onChange()}>
                {
                    options && options.length ?
                        options.map((option: OptionType) =>
                            <option id={option.id} value={option.id} key={option.id}>
                                {option.label}
                            </option>
                        )
                        : <option id='' value=''>Select</option>
                }
            </select>
        </div >
    )
}

export default Select
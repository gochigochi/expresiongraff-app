import React from 'react'

const FieldSet = ({ legend, children, ...props}) => {
    return (
        <fieldset className="w-full border-b border-slate-200 pb-8 last:border-transparent" {...props}>
            <legend className="pb-4">{legend}</legend>
            <div className="flex flex-wrap items-center gap-3">
                { children }
            </div>
        </fieldset>
    )
}

export default FieldSet
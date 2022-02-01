import React from 'react';
import {classNames} from '../../utils';
import {BsExclamationCircleFill} from '@react-icons/all-files/bs/BsExclamationCircleFill'

const Input = (props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {inputRegister?: any, error?: string}) => {
    const {inputRegister, children, error, onChange, ...rest} = props
    const {onChange: inputRegisterOnChange, ...inputRegisterRest} = inputRegister ?? {}
    return <>
        <div className={'relative'}>
            <input onChange={e => {
                onChange && onChange(e)
                inputRegisterOnChange && inputRegisterOnChange(e)
            }} {...rest} {...inputRegisterRest} className={classNames(`shadow-sm block sm:text-sm rounded-md`,
                props.className ? props.className.indexOf('w-') > -1 ? '' : 'w-full' : 'w-full',
                props.className ?? '',
                error ? 'border-red-300 focus:ring-red-400 focus:border-red-500': 'border-gray-300 focus:ring-blue-700 focus:border-blue-700',
                props.disabled ? 'bg-gray-100' : '')}/>
            {error && <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <BsExclamationCircleFill className="h-5 w-5 text-red-500 cursor-pointer" aria-hidden="true" />
            </div>}
        </div>

    </>
}

export default Input

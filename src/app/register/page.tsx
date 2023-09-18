'use client'
import { registrationFormControls, FormControlType } from "@/utils";

import Input from "@/components/FormElements/InputComponent/Input";
import Select from "@/components/FormElements/SelectComponent/Select";


const isRegistred = false;
const styles = {
    button: `
        inline-flex items-center justify-center bg-black
        px-6 py-4 text-lg text-white transition-all duration-200 ease-in-out
        focus:shadow font-medium uppercase tracking-wide 
        w-full`
}

const Register = () => {
    return (
        <div className="bg-white relative">
            <div className="
                flex flex-col item-center justify-between pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto
                xl:px-5 lg:flex-row">
                <div className="flex flex-col justify-center items-center w-full pr-10 pl-10 lg:flex-row">
                    <div className="w-full mt-10 mr-10 mb-0 ml-0 relative max-w-2xl lg:mt-0 lg:w-5/12">
                        <div className="
                            flex flex-col items-center justify-start pt-10 pr-10 pb-10 pl-10
                            bg-white shadow-2xl rounded-xl relative z-10">
                            <p className="w-full text-4xl font-medium text-center font-serif">
                                {
                                    isRegistred ? `Register Successful!` : `Sign up for an account`
                                }
                            </p>
                            {
                                isRegistred ?
                                    <button className={styles.button}>
                                        Login
                                    </button> :
                                    <div className="w-full mt-6 mr-0 ml-0 relative space-y-8">
                                        {
                                            registrationFormControls.map((item: FormControlType) => (
                                                item.componentType === `input` ?
                                                    <Input
                                                        key={item.id}
                                                        type={item.type}
                                                        placeholder={item.placeholder}
                                                        label={item.label}
                                                        value={``}
                                                        onChange={() => { }} />
                                                    : item.componentType === `select` ?
                                                        <Select
                                                            key={item.id}
                                                            value={``}
                                                            options={item.options ? item.options : []}
                                                            label={item.label}
                                                            onChange={() => { }} />
                                                        : null
                                            ))}
                                        <button className={styles.button}>
                                            Register
                                        </button>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
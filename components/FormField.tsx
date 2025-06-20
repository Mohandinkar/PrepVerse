import React from 'react'
import {  FormLabel, FormControl, FormDescription, FormMessage, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Controller, Control, FieldValues, Path } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder? : string;
    type?: "text" | "email" | "password" | "file"
}

const CustomFormField = ({control, name, label, placeholder, type="text"} :
                   FormFieldProps<T>) => (
        <Controller control={control} name={name} render={({ field }) => (

            <FormItem>
            <FormLabel className="label">{label}</FormLabel>
            <FormControl>
            <Input className="input" placeholder={placeholder} {...field} type={type}/>
            </FormControl>
            {/*<FormDescription>*/}
            {/*This is your public display name.*/}
            {/*</FormDescription>*/}
            <FormMessage />
            </FormItem>
            )}
            />

)


export default CustomFormField

import { hash } from "bcrypt";
import { NextResponse } from 'next/server';
import connectToDB from '../../../database/index';
import Joi from 'Joi';
import User from '@/models/user';

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().required(),
})

export const dynamic = `force-dynamic`;

const POST = async (req: any) => {

    await connectToDB();

    const { name, email, password, role } = await req.json();
    const { error } = schema.validate({ name, email, password, role })

    if (error) {
        return NextResponse.json({
            success: false,
            message: email.details[0]
        })
    }

    try {

        const isUserArleadyExists = await User.findOne({ email })

        if (isUserArleadyExists) {
            return NextResponse.json({
                success: false,
                message: `User already exists.`
            })
        } else {
            const hashPassword = await hash(password, 12);
            const newlyCreatedUser = await User.create({
                name, email, password: hashPassword, role
            });

            if (newlyCreatedUser) {
                return NextResponse.json({
                    success: true,
                    message: `Account created successfully.`
                })
            }
        }


    } catch (error) {
        console.log(`Error in new user registration: ${error}`);
        return NextResponse.json({
            succes: false,
            message: `Error!`
        })
    }

}

export default POST;
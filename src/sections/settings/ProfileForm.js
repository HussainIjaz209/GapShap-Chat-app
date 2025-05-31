import React from 'react' // import { useCallback } when useing handleDrop()
import FormProvider, { RHFTextField } from '../../components/hook-form'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Alert, Button, Stack } from '@mui/material'


export default function ProfileForm() {


    const ProfileSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        about: Yup.string().required("About is required"),
        avatarUrl: Yup.string().required('Avatar is required').nullable(true),
    })

    const defaultValues = {
        name: '',
        about: '',
    }

    const methods = useForm({
        resolver: yupResolver(ProfileSchema),
        defaultValues,
    })


    // add in next line { control, watch,  setValue, in fromState: isSubmitting, isSubmitSuccessful }
    const { reset,  setError, handleSubmit, formState: { errors, } } = methods

    const onSubmit = async (data) => {
        try {
            // submit data to backend
            console.log('Data', data);

        } catch (error) {
            console.log(error);
            reset()
            setError('afterSubmit', {
                ...error,
                message: error.message,
            })
        }
    }

    // const values = watch()

    // const handleDrop = useCallback((acceptedFiles) => {
    //     const file = acceptedFiles[0]

    //     const newFile = Object.assign(file, {
    //         preview: URL.createObjectURL(file)
    //     })

    //     if (file) {
    //         setValue('avatarUrl', newFile, { shouldValidate: true })
    //     }


    // }, [setValue])

    return (
        <div>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={3}>

                    <Stack spacing={3}>
                        {!!errors.afterSubmit && <Alert severity='error' >{errors.afterSubmit.message}</Alert>}
                        <RHFTextField name='name' label='Name' helperText={'This name will be visible to your contacts.'} />
                        <RHFTextField multiline rows={4} name='about' label='about' />
                    </Stack>
                    <Stack direction={'row'} justifyContent={'end'}>
                        <Button color='primary' size='large' type='submit' variant='outlined'>Save</Button>
                    </Stack>

                </Stack>
            </FormProvider>
        </div>
    )
}

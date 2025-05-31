import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, Stack } from "@mui/material";
import * as Yup from 'yup'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import FormProvider, { RHFTextField } from '../../components/hook-form';
import RHFAutoComplete from '../../components/hook-form/RHFAutoComplete';

const MEMBERS = ['Name 1', "Name 2", 'Name 3']


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CreateGroupForm = ({ handleClose }) => {
    const NewGroupSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        members: Yup.array().min(2, 'Must have atleast 2 members'),
    })

    const defaultValues = {
        title: '',
        members: [],
    }

    const methods = useForm({
        resolver: yupResolver(NewGroupSchema),
        defaultValues,
    })
 
    // eslint-disable-next-line no-unused-vars
    const { reset, setError, watch, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful, isValid } } = methods

    const onSubmit = async (data) => {
        try {
            // API call 
            console.log(data);

        } catch (error) {
            console.log('error', error);

        }
    }

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                <RHFTextField name='title' label='Title' />
                <RHFAutoComplete name='members' label='members' multiple freeSolo options={MEMBERS.map((option) => option)} ChipProps={{ size: 'medium' }} />
            </Stack>
            <Stack spacing={2} direction={'row'} alignItems={'center'} justifyContent={'end'}>
            <DialogActions>
                <Button type='button' onClick={handleClose} >Cancel</Button>
                <Button type='submit' variant='contained'>Create</Button>
            </DialogActions>
            </Stack>
        </FormProvider>
    )

}




const CreateGroup = ({ open, handleClose }) => {
    return (
        <Dialog
            fullWidth
            maxWidth='xs'
            open={open}
            slots={{
                transition: Transition,
            }}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            sx={{ p: 4 }}
        >
            <DialogTitle sx={{mb:3}}>Create New Group</DialogTitle>
            <DialogContent>
                <CreateGroupForm handleClose={handleClose} />
            </DialogContent>
        </Dialog>
    )
}

export default CreateGroup;
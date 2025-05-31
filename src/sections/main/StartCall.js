import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, Stack } from "@mui/material";
import * as Yup from 'yup'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import FormProvider, { RHFTextField } from '../../components/hook-form';
import Search from '../../components/search/Search';
import SearchIconWrapper from '../../components/search/SearchIconWrapper';
import { MagnifyingGlass } from 'phosphor-react';
import StyledInputBase from '../../components/search/StyleBaseInput';
import { CallElement } from '../../components/CallElement';
import { MembersList } from '../../data';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

// eslint-disable-next-line no-unused-vars
const StartCallForm = ({ handleClose }) => {
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




const StartCall = ({ open, handleClose }) => {


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
            <DialogTitle sx={{ mb: 3 }}>Start Calls</DialogTitle>
            <DialogContent>
                <Stack spacing={2}>
                    <Stack sx={{ width: '100%' }}>
                        <Search>
                            <SearchIconWrapper>
                                <MagnifyingGlass color='#709CE6' />
                            </SearchIconWrapper>
                            <StyledInputBase placeholder='Search...' inputProps={{ "aria-label": "search" }} />
                        </Search>
                    </Stack>
                    {/* call List  */}

                    {
                        MembersList.map((el) => {
                            return <CallElement {...el} />
                        })
                    }
                </Stack>

            </DialogContent>
        </Dialog>
    )
}

export { StartCall };
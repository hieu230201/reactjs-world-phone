// ** React Imports
import {forwardRef, useState, useEffect} from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import Select from '@mui/material/Select'
import {styled} from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'
import DatePicker from "react-datepicker";
import DatePickerWrapper from "../../@core/styles/libs/react-datepicker";

const ImgStyled = styled('img')(({theme}) => ({
    width: 120,
    height: 120,
    marginRight: theme.spacing(6.25),
    borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({theme}) => ({
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        textAlign: 'center'
    }
}))

const ResetButtonStyled = styled(Button)(({theme}) => ({
    marginLeft: theme.spacing(4.5),
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginLeft: 0,
        textAlign: 'center',
        marginTop: theme.spacing(4)
    }
}))

const CustomInput = forwardRef((props, ref) => {
    return <TextField inputRef={ref} label='Birth Date' fullWidth {...props} />
})

const TabAccount = () => {
    // ** State
    const [openAlert, setOpenAlert] = useState(false)
    const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')
    const [userProfile, setUserProfile] = useState({
        username: 'hieunt',
        name: 'Nguyễn Trung Hiếu',
        email: 'h1ieuop30316@gmail.com',
        role: 'admin',
        status: 'active',
        birthDate: '01-01-2001',
    });
    const onChange = file => {
        const reader = new FileReader()
        const {files} = file.target
        if (files && files.length !== 0) {
            reader.onload = () => setImgSrc(reader.result)
            reader.readAsDataURL(files[0])
        }
    }

    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const onChangeUser = (event) => {
        debugger
        const {name, value} = event.target;
        setUserProfile((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }
    useEffect(() => {
        console.log('Updated userProfile:', userProfile);
    }, [userProfile])



    return (
        <CardContent>
            <form>
                <Grid container spacing={7}>
                    <Grid item xs={12} sx={{marginTop: 4.8, marginBottom: 3}}>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <ImgStyled src={imgSrc} alt='Profile Pic'/>
                            <Box>
                                <ButtonStyled component='label' variant='contained'
                                              htmlFor='account-settings-upload-image'>
                                    Upload New Photo
                                    <input
                                        hidden
                                        type='file'
                                        onChange={onChange}
                                        accept='image/png, image/jpeg'
                                        id='account-settings-upload-image'
                                    />
                                </ButtonStyled>
                                <ResetButtonStyled color='error' variant='outlined'
                                                   onClick={() => setImgSrc('/images/avatars/1.png')}>
                                    Reset
                                </ResetButtonStyled>
                                <Typography variant='body2' sx={{marginTop: 5}}>
                                    Allowed PNG or JPEG. Max size of 800K.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField onChange={onChangeUser} name={'username'} fullWidth label='Username' placeholder='johnDoe' defaultValue={userProfile.username}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField onChange={onChangeUser} name={'name'} fullWidth label='Name' placeholder='John Doe' defaultValue={userProfile.name}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            type='email'
                            label='Email'
                            onChange={onChangeUser} name={'email'}
                            placeholder='johnDoe@example.com'
                            defaultValue={userProfile.email}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel>Role</InputLabel>
                            <Select label='Role' defaultValue={userProfile.role} onChange={onChangeUser} name={'role'}>
                                <MenuItem value='admin'>Admin</MenuItem>
                                <MenuItem value='author'>Author</MenuItem>
                                <MenuItem value='editor'>Editor</MenuItem>
                                <MenuItem value='maintainer'>Maintainer</MenuItem>
                                <MenuItem value='subscriber'>Subscriber</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel>Status</InputLabel>
                            <Select label='Status' defaultValue={userProfile.status} onChange={onChangeUser} name={'status'}>
                                <MenuItem value='active'>Active</MenuItem>
                                <MenuItem value='inactive'>Inactive</MenuItem>
                                <MenuItem value='pending'>Pending</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <DatePickerWrapper>
                            <DatePicker
                                onChange={date => setUserProfile((prevState) => ({
                                    ...prevState,
                                    ['birthDate'] : date
                                }))}
                                name={'birthDate'}
                                showYearDropdown
                                showMonthDropdown
                                id='account-settings-date'
                                customInput={<CustomInput/>}
                                value={userProfile.birthDate}
                            />
                        </DatePickerWrapper>
                    </Grid>

          {openAlert ? (
            <Grid item xs={12} sx={{ mb: 3 }}>
              <Alert
                severity='warning'
                sx={{ '& a': { fontWeight: 400 } }}
                action={
                  <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpenAlert(false)}>
                    <Close fontSize='inherit' />
                  </IconButton>
                }
              >
                <AlertTitle>Your email is not confirmed. Please check your inbox.</AlertTitle>
                <Link href='/' onClick={e => e.preventDefault()}>
                  Resend Confirmation
                </Link>
              </Alert>
            </Grid>
          ) : null}

          <Grid item xs={12}>
            <Button variant='contained' sx={{ marginRight: 3.5 }}>
              Save Changes
            </Button>
            <Button type='reset' variant='outlined' color='secondary'>
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabAccount

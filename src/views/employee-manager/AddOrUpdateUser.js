import {forwardRef, useState} from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import EyeOutline from "mdi-material-ui/EyeOutline";
import EyeOffOutline from "mdi-material-ui/EyeOffOutline";
import DatePicker from "react-datepicker";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";

const marginCard = '200px'
const CustomInput = forwardRef((props, ref) => {
    return <TextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})

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

const ModalUser = ({titleModal, handleClose}) => {
    // ** States
    const [language, setLanguage] = useState([])
    const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')
    const [date, setDate] = useState(null)

    const [values, setValues] = useState({
        password: '',
        password2: '',
        showPassword: false,
        showPassword2: false
    })

    // Handle Password
    const handlePasswordChange = prop => event => {
        setValues({...values, [prop]: event.target.value})
    }

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword})
    }

    const handleMouseDownPassword = event => {
        event.preventDefault()
    }

    // Handle Confirm Password
    const handleConfirmChange = prop => event => {
        setValues({...values, [prop]: event.target.value})
    }

    const handleClickShowConfirmPassword = () => {
        setValues({...values, showPassword2: !values.showPassword2})
    }

    const handleMouseDownConfirmPassword = event => {
        event.preventDefault()
    }

    // Handle Select
    const handleSelectChange = event => {
        setLanguage(event.target.value)
    }

    const onChange = file => {
        const reader = new FileReader()
        const {files} = file.target
        if (files && files.length !== 0) {
            reader.onload = () => setImgSrc(reader.result)
            reader.readAsDataURL(files[0])
        }
    }

    return (
        <Card style={{marginTop: '50px', marginRight: marginCard, marginLeft: marginCard}}>
            <CardHeader title={titleModal} titleTypographyProps={{variant: 'h6'}}/>
            <Divider sx={{margin: 0}}/>
            <form onSubmit={e => e.preventDefault()}>
                <CardContent>
                    <Grid container spacing={6}>
                        <Grid item xs={12}>
                            <Typography variant='body2' sx={{fontWeight: 600}}>
                                1. Account Details
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label='Username' placeholder='carterLeonard'/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth type='email' label='Email' placeholder='carterleonard@gmail.com'/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor='form-layouts-separator-password'>Password</InputLabel>
                                <OutlinedInput
                                    label='Password'
                                    value={values.password}
                                    id='form-layouts-separator-password'
                                    onChange={handlePasswordChange('password')}
                                    type={values.showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position='end'>
                                            <IconButton
                                                edge='end'
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                aria-label='toggle password visibility'
                                            >
                                                {values.showPassword ? <EyeOutline/> : <EyeOffOutline/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor='form-layouts-separator-password-2'>Confirm Password</InputLabel>
                                <OutlinedInput
                                    value={values.password2}
                                    label='Confirm Password'
                                    id='form-layouts-separator-password-2'
                                    onChange={handleConfirmChange('password2')}
                                    type={values.showPassword2 ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position='end'>
                                            <IconButton
                                                edge='end'
                                                aria-label='toggle password visibility'
                                                onClick={handleClickShowConfirmPassword}
                                                onMouseDown={handleMouseDownConfirmPassword}
                                            >
                                                {values.showPassword2 ? <EyeOutline/> : <EyeOffOutline/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider sx={{marginBottom: 0}}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body2' sx={{fontWeight: 600}}>
                                2. Personal Info
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
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
                            <TextField fullWidth label='Full Name' placeholder='Leonard'/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id='form-layouts-separator-select-label'>Role</InputLabel>
                                <Select
                                    label='Role'
                                    defaultValue=''
                                    id='form-layouts-separator-select'
                                    labelId='form-layouts-separator-select-label'
                                >
                                    <MenuItem value='ADMIN'>ADMIN</MenuItem>
                                    <MenuItem value='SELL'>SELL</MenuItem>
                                    <MenuItem value='WareHouse'>WareHouse</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ width: '100%' }}>
                            <DatePicker
                                selected={date}
                                showYearDropdown
                                showMonthDropdown
                                placeholderText='MM-DD-YYYY'
                                customInput={<CustomInput sx={{ width: '100%' }} />} // Áp dụng style ở đây
                                id='form-layouts-separator-date'
                                onChange={date => setDate(date)}
                                sx={{ width: '100%' }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label='Phone No.' placeholder='+1-123-456-8790'/>
                        </Grid>

                    </Grid>
                </CardContent>
                <Divider sx={{margin: 0}}/>
                <CardActions>
                    <Button size='large' type='submit' sx={{mr: 2}} variant='contained'>
                        Submit
                    </Button>
                    <Button size='large' color='secondary' variant='outlined' onClick={handleClose}>
                        Cancel
                    </Button>
                </CardActions>
            </form>
        </Card>
    )
}

export default ModalUser

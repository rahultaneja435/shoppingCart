import { Grid,Select,InputLabel, MenuItem, Typography,Button,StepConnector } from '@material-ui/core';
import React, { useState ,useEffect} from 'react'
import {useForm,FormProvider} from 'react-hook-form'
import CustomerTextfield from './CustomerTextfield'
import { commerce } from '../../../Commerce/Commerce';
import {Link} from 'react-router-dom'

function AddressForm({checkoutToken,next}) {
    const [shippingCountries,setShippingCountries] = useState([]);
    const [shippingCountry,setShippingCountry] = useState('');
    const [shippingSubdivisions,setSubdivisions]= useState([]);
    const [shippingSubdivision,setSubdivision]= useState('');
    const [shippingOptions,setShippingOptions]= useState([]);
    const [shippingOption,setShippingOption]= useState('');
    const methods = useForm();

    const fetchShippingCountries = async(checkoutId)=>
    {
       const {countries} =  await commerce.services.localeListShippingCountries(checkoutId);
       console.log(countries);
       setShippingCountries(countries);
       setShippingCountry(Object.keys(countries)[0]);
       console.log(shippingCountry);
    }
    const fetchSubdivisions = async (countryCode) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
    
        setSubdivisions(subdivisions);
        setSubdivision(Object.keys(subdivisions)[0]);
        console.log(shippingSubdivision)
        console.log(subdivisions)
      };
      const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });
    
        setShippingOptions(options);
        setShippingOption(options[0].id);
        console.log(shippingOption);
        console.log(shippingOptions);
      };
    useEffect(()=>
    {
        fetchShippingCountries(checkoutToken.id);
    },[])

    useEffect(() => {
        if (shippingCountry) fetchSubdivisions(shippingCountry);
      }, [shippingCountry]);
    
      useEffect(() => {
        if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
      }, [shippingSubdivision]);

    const countries = Object.entries(shippingCountries).map(([code,name])=>({id:code,label:name}));
    const subDivision = Object.entries(shippingSubdivisions).map(([code,name])=>({id:code,label:name}));
    const shippingOptionsData = shippingOptions.map((element) => ({ id: element.id, label: `${element.description} - (${element.price.formatted_with_symbol})` }));
    console.log(shippingOptionsData);
    return (
        <div>
           <Typography variant="h6" gutterBottom>Shipping Address</Typography>
           <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry, shippingSubdivision, shippingOption }))}>
                <Grid container spacing={3}>
                   <CustomerTextfield required name='firstName' label='First Name'/>
                   <CustomerTextfield required name="lastName" label="Last name" />
                   <CustomerTextfield required name="address1" label="Address line 1" />
                   <CustomerTextfield required name="email" label="Email" />
                   <CustomerTextfield required name="city" label="City" />
                   <CustomerTextfield required name="zip" label="Zip / Postal code" />
                   <Grid>
                       <InputLabel>Shipping country</InputLabel>
                       <Select value={shippingCountry} fullwidth onChange={(e)=>setShippingCountry(e.target.value)}>
                        {countries.map(ele=>
                            (<MenuItem key={ele.id} value={ele.id}>
                               {ele.label}
                            </MenuItem>))} 
                       </Select>
                   </Grid>
                   <Grid>
                       <InputLabel>Shipping subdivison</InputLabel>
                       <Select value={shippingSubdivision} fullwidth onChange={(e)=>setSubdivision(e.target.value)}>
                       {subDivision.map(ele=>
                            (<MenuItem key={ele.id} value={ele.id}>
                               {ele.label}
                            </MenuItem>))} 
                       </Select>
                   </Grid>
                   <Grid>
                       <InputLabel>Shipping options</InputLabel>
                       <Select value={shippingOption} fullwidth onChange={(e)=>setShippingOption(e.target.value)}>
                       {shippingOptionsData.map(ele=>
                            (<MenuItem key={ele.id} value={ele.id}>
                               {ele.label}
                            </MenuItem>))} 
                       </Select>
                   </Grid>
                </Grid>
                <br/>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
               <Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
               <Button type="submit" variant="contained" color="primary">Next</Button>
          </div>
            </form>
           </FormProvider>
        </div>
    )
}

export default AddressForm

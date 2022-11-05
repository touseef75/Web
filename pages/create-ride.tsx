import PageLayout from '@/components/page-layout';
import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Text,
  Textarea,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { useState } from 'react';
import { IoIosPin } from 'react-icons/io';

export default function OfferRide() {
  const [isNotMobile] = useMediaQuery('(min-width: 760px)');
  const [value, setValue] = useState('1');
  const [pickupRecomm, setPickupRec] = useState([]);
  const [dropOffRecomm, setDropOffRec] = useState([]);

  // useEffect(()=>{
  //     Router.push('/')
  // },[])
  return (
    <PageLayout
      title='OfferRide | Ride&Share'
      description='Create your own carpool'
    >
      <Box py={12}></Box>

      <Box
        minH={'80vh'}
        flexWrap={isNotMobile ? 'nowrap' : 'wrap'}
        display={'flex'}
        justifyContent='center'
        alignItems={'center'}
        width='100%'
      >
        <Box width={isNotMobile ? '50%' : '100%'}>
          <Box
            height={'auto'}
            width='auto'
            p={5}
            ml={4}
            boxShadow={'2xl'}
            bg={useColorModeValue('white', 'gray.700')}
          >
            <HStack mt={2}>
              <IoIosPin />
              <Input
                variant='flushed'
                placeholder='Leaving From..'
                onChange={(e) => {
                  //   console.log(e.target.value);
                  //   fetch(
                  //     `https://maps.googleapis.com/maps/api/geocode/json?address=${e.target.value}&key=AIzaSyB2HyNTBm1sQJYJkwOOUA1LXRHAKh4gmjU`
                  //   )
                  //     .then((res) => res.json())
                  //     .then((res) => setPickupRec(res.results));
                }}
                list='searchs'
              />
              <datalist id='searchs'>
                {pickupRecomm.map((e) => (
                  <option value={e.formatted_address}></option>
                ))}
              </datalist>
            </HStack>
            <HStack mt={2}>
              <IoIosPin />
              <Input variant='flushed' placeholder='Going To..' />
            </HStack>
            <Box
              m={isNotMobile ? 4 : 1}
              p={isNotMobile ? 3 : 2}
              width={isNotMobile ? '94%' : '100%'}
              display={'flex'}
              justifyContent='space-between'
            >
              <Box width={!isNotMobile && '40%'}>
                <Text>Date :</Text>
                <Input type={'date'} mr={isNotMobile ? 0 : 1} />
              </Box>
              <Box width={!isNotMobile && '40%'}>
                <Text>Time :</Text>
                <Input type={'time'} />
              </Box>
            </Box>
            <Flex mt={3} justifyContent='space-around'>
              <Box width={!isNotMobile && '40%'}>
                <Text>Fare</Text>
                <Input htmlSize={4} type={'number'} />
              </Box>
              <Box width={!isNotMobile && '40%'}>
                <Text>Seats</Text>
                <Input type={'number'} htmlSize={4} />
              </Box>
            </Flex>
            <Box mt={3}>
              <Text fontWeight={'bold'} m={2}>
                Select Ride Type:
              </Text>
              <RadioGroup onChange={setValue} value={value}>
                <HStack direction='row'>
                  <Radio value='1'>Car</Radio>
                  <Radio value='2'>Bike</Radio>
                  <Radio value='3'>Bus</Radio>
                </HStack>
              </RadioGroup>
            </Box>
            <Box m={3}>
              <Textarea
                placeholder='enter any note here about the trip '
                size='sm'
              />
            </Box>
            <Button mt={3} width='100%' bg={'blue.400'} color={'white'}>
              CREATE RIDE
            </Button>
          </Box>
        </Box>
      </Box>
    </PageLayout>
  );
}

import {
    Button,
    Center, FormControl,
    Heading,
    HStack,
    Image,
    Input,
    Text,
    useClipboard,
    VStack
} from "@chakra-ui/react";
import {useState} from "react";
import {urlShortenerAPI} from "../services/UrlShortnerService";
import cornerLeft from '../assets/corner-left.webp'
import cornerRight from '../assets/corner-right.webp'
import cornerBottomLeft from '../assets/corner-bottom-left.webp'
import cornerBottomRight from '../assets/corner-bottom-right.webp'

const fontColor = '#A88B4D'
const fontSize = '22px'

export function MainPage() {
    const {onCopy, value, setValue, hasCopied} = useClipboard('')

    const [longUrl, setLongUrl] = useState('')

    const [validateError, setValidateError] = useState(false)

    const getShortUrl = async (e) => {
        e.preventDefault();
        const isValid = validate(longUrl)
        setValidateError(!isValid)
        if (isValid) {
            let response = await urlShortenerAPI.getShortUrl(longUrl)

            setValue(process.env.REACT_APP_HOST_URL + response.short_url)

        }
    }

    const validate = (url) => {
        try {
            new URL(url)
            return true
        } catch (err) {
            return false
        }
    }

    return (
        <>
            <Center w={'100%'} minH={'100vh'} position={'relative'}>
                <Image src={cornerLeft} position={'absolute'} top={'0'} left={'0'} width={'15vw'}></Image>
                <Image src={cornerRight} position={'absolute'} top={'0'} right={'0'} width={'15vw'}></Image>
                <Image src={cornerBottomLeft} position={'absolute'} bottom={'0'} left={'0'} width={'15vw'}></Image>
                <Image src={cornerBottomRight} position={'absolute'} bottom={'0'} right={'0'} width={'15vw'}></Image>
                <VStack>
                    <Heading color={fontColor} fontSize={'160px'} fontFamily={'Hogwarts'}
                             fontWeight={'400'} userSelect={'none'}>D I M I N U V O</Heading>

                    <form onSubmit={getShortUrl}>
                        <HStack marginTop={'60px !important'}>
                            <FormControl isInvalid={validateError}>
                                <Input _placeholder={{'font-family': 'Calson Antique'}} fontSize={fontSize}
                                       fontFamily={'Calson Antique'}
                                       placeholder={'Type url'} w={'360px'} color={fontColor} borderColor={fontColor}
                                       focusBorderColor={fontColor} borderRadius={'15px'}
                                       _hover={{borderColor: '#f8b86b'}}
                                       onChange={(e) => {
                                           setLongUrl(e.target.value)
                                       }}
                                />
                            </FormControl>
                            <Button width={'90px'} color={fontColor} fontFamily={'Calson Antique'}
                                    fontSize={fontSize}
                                    type={'submit'}
                                    marginX={'12px'} background={'none'} border={'1px'} borderRadius={'15px'}
                                    borderColor={fontColor}>Cast</Button>
                        </HStack>
                    </form>

                    <HStack height={'100px'}>
                        {value ?
                            <>
                                <Text fontSize={fontSize} paddingInline={'1rem'} fontFamily={'Calson Antique'}
                                      placeholder={'Type url'} w={'360px'} color={fontColor} borderColor={fontColor}
                                      focusBorderColor={fontColor} borderRadius={'15px'}>{value}</Text>
                                <Button onClick={onCopy} width={'90px'} color={fontColor} fontFamily={'Calson Antique'}
                                        fontSize={fontSize}
                                        marginX={'12px'} background={'none'} border={'1px'} borderRadius={'15px'}
                                        borderColor={fontColor}>{hasCopied ? "Copied!" : "Copy"}</Button>
                            </>
                            : ''
                        }
                    </HStack>
                </VStack>
            </Center>
        </>
    )
}
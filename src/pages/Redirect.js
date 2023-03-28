import {urlShortenerAPI} from "../services/UrlShortnerService";
import {useEffect} from "react";
import {Center, Image} from "@chakra-ui/react";
import gif from '../assets/cat_on_broomstick.gif'
import gif1 from '../assets/hagrid.gif'
import gif2 from '../assets/niffler.gif'
import gif3 from '../assets/footprints.gif'
import gif5 from '../assets/sir_nick.gif'

const gifs = [gif, gif1, gif2, gif3, gif5,]

const delay = 3000;

export function Redirect() {

    const redirect = async () => {
        let shortUrl = window.location.pathname.slice(1)
        let response = await urlShortenerAPI.getLongUrl(shortUrl)
        window.location.replace(response.long_url)
    }

    useEffect(() => {
        if (delay) {
            const timeout = setTimeout(() => {
                redirect()
            }, delay)
            return () => {
                clearTimeout(timeout)
            }
        } else {
            redirect()
        }
    }, [])

    return <>
        <Center minH={'100vh'}>
            <Image maxW={'500px'} src={gifs[Math.floor(Math.random() * gifs.length)]}></Image>
        </Center>
    </>
}
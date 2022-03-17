import { chakra, Flex, Heading, Stack, VStack } from '@chakra-ui/react'
import * as React from 'react'
import joshuaPictureSrc from 'public/images/homepage/joshua.jpg'
import julienPictureSrc from 'public/images/homepage/julien.jpeg'
import { Testimonial } from './Testimonial'

export const Testimonials = () => {
  return (
    <Flex as="section" justify="center">
      <VStack spacing={12} pt={'52'} px="4">
        <Heading textAlign={'center'}>
          They've tried, they never looked back. 💙
        </Heading>
        <Stack
          direction={{ base: 'column', xl: 'row' }}
          spacing="10"
          maxW="1200px"
        >
          <Testimonial
            name="Joshua Lim"
            role="Growth Strategist @ Socialhackrs Media"
            image={joshuaPictureSrc}
          >
            I upgraded my typeforms to typebots and saw a conversion rate
            increase{' '}
            <chakra.span fontWeight="bold" color="orange.300">
              from 14% to 43%
            </chakra.span>{' '}
            on my marketing campaigns. I noticed the improvement on day one.
            That was a game-changer.
          </Testimonial>
          <Testimonial
            name="Nicolai Grut"
            role="Growth Strategist @ X"
            image={joshuaPictureSrc}
          >
            I am really loving using Typebot! I have used so many bot builders
            (ActiveChat, Botstar, Uchat, Monkeybot) and Typebot is definitely
            the most user-friendly, and yet still powerful.
          </Testimonial>
          <Testimonial
            name="Julien Muratot"
            role="Growth Manager @ Hornetwork"
            image={julienPictureSrc}
          >
            I run Google ads all year long on our landing page that contains a
            typebot. I saw a{' '}
            <chakra.span fontWeight="bold" color="orange.300">
              2x increase
            </chakra.span>{' '}
            on our conversation rate compared to our old WordPress form.
          </Testimonial>
        </Stack>
      </VStack>
    </Flex>
  )
}

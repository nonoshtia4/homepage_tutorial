import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord
} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'



const home = () => (
  <layout>
    <container>
      <box
        borderradius="lg"
        mb={6}
        p={3}
        textalign="center"
        bg={useColorModeValue('whitealpha.500', 'whitealpha.200')}
      >
        hello, i&apos;m a full-stack developer based in japan!
      </box>

      <box display={{ md: 'flex' }}>
        <box flexgrow={1}>
          <heading as="h2" variant="page-title">
            Yusuke Nonoshita
          </heading>
          <p>digital craftsman ( artist / developer / designer )</p>
        </box>
        <box
          flexshrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textalign="center"
        >
          <image
            bordercolor="whitealpha.800"
            borderwidth={2}
            borderstyle="solid"
            maxwidth="100px"
            display="inline-block"
            borderradius="full"
            src="/images/takuya.jpg"
            alt="profile image"
          />
        </box>
      </box>

      <section delay={0.1}>
        <heading as="h3" variant="section-title">
          work
        </heading>
        <paragraph>tet</paragraph>
        <box align="center" my={4}>
          <nextlink href="/works">
            <button righticon={<chevronrighticon />} colorscheme="teal">
              my portfolio
            </button>
          </nextlink>
        </box>
      </section>

      <section delay={0.2}>
        <heading as="h3" variant="section-title">
          bio
        </heading>
        <biosection>
          <bioyear>1984</bioyear>
          born in osaka (大阪), japan.
        </biosection>
        <biosection>
          <bioyear>2010</bioyear>
            中央大学理工学部
        </biosection>
        <biosection>
          <bioyear>2014</bioyear>
          worked at NTT Data Engineering Systemes
        </biosection>
      </section>

    </container>
  </layout>
)

export default home

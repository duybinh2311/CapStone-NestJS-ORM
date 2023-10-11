import { vars } from '@/configs/theme'
import {
  Box,
  Container,
  Image,
  ScrollArea,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core'
import { FC } from 'react'
import { PinActionMenu } from './components/pin-action-menu'
import { PinLayout } from '@/components/pin-layout'
import { Pin } from '@/components/pin'

export const PinPage: FC = () => {
  return (
    <>
      <section>
        <Container>
          <SimpleGrid
            style={{
              boxShadow: '0 0 10px 5px rgba(0,0,0,0.1)',
              borderRadius: vars.radius.xl,
              overflowX: 'clip',
            }}
            w={'80%'}
            mx={'auto'}
            cols={2}
            spacing={0}
          >
            <Box>
              <Image
                src={
                  'https://i.pinimg.com/564x/e6/22/ce/e622ce555bcb0ac835a98027868934f3.jpg'
                }
              />
            </Box>

            <Stack>
              <PinActionMenu />
              <ScrollArea h={600}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
                eveniet, laudantium modi dolorum neque explicabo veritatis,
                consectetur vero alias labore nemo quod ab porro voluptatibus.
                Necessitatibus dolore magni natus nemo similique sapiente
                corrupti eum iusto odio quo perspiciatis omnis soluta veniam
                pariatur, dicta molestias laudantium architecto repellat minus
                reprehenderit adipisci. Iusto distinctio consequatur voluptatum
                quibusdam alias culpa? Debitis nam quidem consequuntur
                dignissimos officiis alias nobis praesentium sequi, dicta
                quaerat quo sunt eaque placeat quisquam odio quod cumque vero
                ipsa labore ipsum. Praesentium, repudiandae tenetur consectetur
                exercitationem harum nisi facilis ex minus nulla, maxime
                pariatur asperiores quibusdam molestias magnam odio iste. Earum
                enim saepe sunt et incidunt fugit odit repudiandae accusantium
                libero aliquam culpa sed reprehenderit minus, est distinctio
                adipisci tempora ad quam corporis praesentium expedita, odio
                perspiciatis? Quam explicabo modi inventore voluptatibus harum.
                Nemo earum modi deserunt eaque. Aut excepturi dolorem corrupti
                vero, iure sit explicabo dolore ducimus quas ut alias vitae iste
                mollitia, obcaecati cum maiores et placeat deserunt. Quos quam
                dolor suscipit sit fugiat? Nesciunt, quis! Repellat officiis
                vitae ab excepturi! Quasi repellendus obcaecati fugit autem.
                Maxime consectetur natus tempora fugit ab est a hic. Atque
                quaerat voluptates quidem natus. Quibusdam, eaque? Dolorum
                minima delectus fugit perferendis alias et, earum adipisci.
                Consectetur, vitae veniam laborum quas eligendi ea mollitia
                libero tempore porro maxime, quibusdam at, asperiores quasi enim
                aperiam nemo nobis in tenetur fuga vero beatae? Necessitatibus
                tempora assumenda est, vero sint deleniti fugit, itaque vitae
                eius ad quasi et tempore, hic quisquam. Itaque porro beatae quae
                aperiam nisi distinctio consequuntur perferendis veritatis,
                consectetur dolorem expedita sint impedit, corporis, suscipit
                iste odio quibusdam placeat magnam! Reiciendis adipisci a,
                cupiditate quos, omnis vero iusto, vel laboriosam quo quae
                deleniti tenetur! Voluptatem, sint est sequi repudiandae id
                delectus aliquid obcaecati? Neque quas placeat non. Repellendus,
                a placeat explicabo ducimus eum laboriosam. Repudiandae,
                deleniti voluptates temporibus accusantium quo impedit quia
                ratione nisi at reiciendis voluptatum expedita vitae vel quos
                eaque laudantium dolorem tenetur possimus quisquam dolore quae
                nostrum. Laborum illum accusantium mollitia corrupti ad quam,
                provident tempora ipsum nesciunt voluptates suscipit explicabo
                excepturi expedita neque cum debitis quisquam facilis id
                cupiditate culpa vero voluptatum itaque. Pariatur, recusandae
                placeat vel unde laboriosam minus quae quis, expedita odio
                beatae vitae magnam, error tempora facilis. Magnam veritatis,
                voluptatem laborum, culpa repudiandae laudantium deserunt ipsam
                cupiditate sed suscipit, aperiam tempore saepe mollitia nihil
                maiores pariatur sapiente unde explicabo quas voluptate
                doloribus. Vitae nobis, temporibus ipsum nihil culpa laborum.
                Atque veniam pariatur nemo iure molestiae nam saepe reiciendis
                ipsum. Magni voluptates exercitationem repudiandae maxime itaque
                vero, hic voluptatem iusto eum eaque magnam illo ex? Pariatur,
                aliquam repellendus a sapiente fugiat quam neque dolorum ut
                molestias numquam totam, commodi, fuga odio officiis. Quas ipsam
                vel mollitia animi accusantium voluptate distinctio officiis
                earum. Atque, quo. Non illum, eaque debitis natus sint aut
                magnam dignissimos sequi reiciendis dolorem, similique error
                veritatis ratione ea voluptatum quasi doloribus. Id voluptate
                inventore iure dolore quam porro esse consequuntur asperiores
                neque, quia repellendus sit reprehenderit ab maiores debitis
                dolorem iusto itaque voluptatem natus?
              </ScrollArea>
            </Stack>
          </SimpleGrid>
          <PinLayout>
            <Pin size='small' />
            <Pin size='small' />
            <Pin size='small' />
            <Pin size='small' />
            <Pin size='small' />
            <Pin size='small' />
            <Pin size='small' />
            <Pin size='small' />
            <Pin size='small' />
            <Pin size='small' />
            <Pin size='small' />
            <Pin size='small' />
            <Pin size='small' />
            <Pin size='small' />
            <Pin size='small' />
          </PinLayout>
        </Container>
      </section>
    </>
  )
}

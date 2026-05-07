import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import UnifiedProviders from '#/context/unifiedProviders'
import { ThemeProvider } from 'styled-components'
import theme from '#/styles/theme'
import GlobalStyle from '#/styles/global'
import GlobalAnimations from '#/styles/animations'
import GlobalTypography from '#/styles/typography'
import HeaderMaintance from '#/patterns/HeaderMaintance'
import Footer from '#/patterns/Footer'

function RootComponent() {
  return (
    <UnifiedProviders>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalAnimations />
        <GlobalTypography />
        <main id="root">
          <HeaderMaintance />
          <Outlet />
          <Footer />
        </main>
      </ThemeProvider>
    </UnifiedProviders>
  )
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: '.: turvaFM :.',
      },
      {
        name: 'description',
        content:
          'turvaFM é um fã-site e a primeia rádio do Turva. Procuramos proporcionar diversão através de programações diversas e interações diretas com vocês jogadores e ouvintes, além de - é claro - muita música!',
      },
    ],
    links: [],
  }),
  component: RootComponent,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        {/* <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        /> */}
        <Scripts />
      </body>
    </html>
  )
}

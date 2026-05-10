import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalAnimations from './styles/animations'
import GlobalTypography from './styles/typography'
import GlobalStyle from './styles/global'
import HeaderMaintance from './templates/HeaderMaintance'
import Footer from './templates/Footer'
import UnifiedProviders from './context/unifiedProviders'

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <UnifiedProviders>
      <ThemeProvider theme={theme}>
        <>
          <HeaderMaintance />
          <RouterProvider router={router} />
          <Footer />
        </>
        <GlobalStyle />
        <GlobalTypography />
        <GlobalAnimations />
      </ThemeProvider>
    </UnifiedProviders>,
  )
}

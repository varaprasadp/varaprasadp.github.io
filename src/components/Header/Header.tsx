import { HeaderProps } from './types'
import { SLink, SNavSection, STitle, SWrapper } from './styles'

const Header = (props: HeaderProps) => {
  return (
    <SWrapper>
      <STitle to="/">BUS RESERVATION</STitle>
      <SNavSection>
        <SLink to="/">Dashboard</SLink>
        <SLink to="/reserve">Reserve</SLink>
      </SNavSection>
    </SWrapper>
  )
}

export default Header
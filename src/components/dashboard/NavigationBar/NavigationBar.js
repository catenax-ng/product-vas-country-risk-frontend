import { MainNavigation, Logo } from 'cx-portal-shared-components'
import React, { useContext } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import LogoSVG from '../../../resources/cxlogo.svg'
import { CompanyUserContext } from '../../../contexts/companyuser'
import { getPortalLink } from '../../services/EnvironmentService'
import Dialog from '@mui/material/Dialog'
import './styles.scss'
import CloseIcon from '@mui/icons-material/Close'

const NavigationBar = () => {
  const { companyUser, updateCompanyUser } = useContext(CompanyUserContext)

  const [open, setOpen] = React.useState(false)

  const openHelpDialog = () => {
    setOpen(!open)
  }

  return (
    <div>
      <MainNavigation
        items={[
          {
            title: 'Country Risk Dashboard',
          },
        ]}
      >
        <a href={getPortalLink()}>
          <Box className="logosvg" component="img" src={LogoSVG} />
        </a>
        <div className="btn-right">
        </div>
      </MainNavigation>
    </div>
  )
}

export default NavigationBar

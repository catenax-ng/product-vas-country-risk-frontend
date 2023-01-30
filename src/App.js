/********************************************************************************
* Copyright (c) 2022,2023 BMW Group AG 
* Copyright (c) 2022,2023 Contributors to the Eclipse Foundation
*
* See the NOTICE file(s) distributed with this work for additional
* information regarding copyright ownership.
*
* This program and the accompanying materials are made available under the
* terms of the Apache License, Version 2.0 which is available at
* https://www.apache.org/licenses/LICENSE-2.0.
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
* WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
* License for the specific language governing permissions and limitations
* under the License.
*
* SPDX-License-Identifier: Apache-2.0
********************************************************************************/
import Dashboard from './components/dashboard/dashboard'
import './App.scss'
import { RatesProvider } from './contexts/rates'
import { PageHeader } from 'cx-portal-shared-components'
import { Footer } from './components/dashboard/Footer/Footer'
import { RangesProvider } from './contexts/ranges'
import { CountryProvider } from './contexts/country'
import { CompanyUserProvider } from './contexts/companyuser'
import { ReportProvider } from './contexts/reports'
import { ReloadProvider } from './contexts/refresh'
import { GatesProvider } from './contexts/gates'
import NavigationBar from './components/dashboard/NavigationBar/NavigationBar'
function App() {
  return (
    <>
      <GatesProvider>
        <RatesProvider>
          <RangesProvider>
            <CountryProvider>
              <CompanyUserProvider>
                <ReportProvider>
                  <ReloadProvider>
                    <div className="navbar">
                      <NavigationBar />
                    </div>
                    <div className="App">
                      <Dashboard />
                      <Footer />
                    </div>
                  </ReloadProvider>
                </ReportProvider>
              </CompanyUserProvider>
            </CountryProvider>
          </RangesProvider>
        </RatesProvider>
      </GatesProvider>
    </>
  )
}

export default App

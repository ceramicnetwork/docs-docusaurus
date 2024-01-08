import React from 'react'
import useIsBrowser from '@docusaurus/useIsBrowser'
import { GraphiQL } from 'graphiql'
import 'graphiql/graphiql.min.css'
import { ComposeClient } from '@composedb/client'
import ReactGA from 'react-ga4'
import Profiles from './profiles'
import Posts from './posts'
import Comments from './comments'
import {definition} from './utils/read-runtime'

const fetcher = async (graphQLParams) => {
  ReactGA.initialize('G-426ZZLPJPW')

  const composeClient = new ComposeClient({
    ceramic: 'https://ceramic-temp.hirenodes.io',
    definition,
  })

  const data = await composeClient.executeQuery(`${graphQLParams.query}`)
  console.log(data)

  if (data.errors) {
    ReactGA.event({
      category: 'sandbox-query',
      action: 'query-error',
    })
  }
  if (!data.data.__schema) {
    ReactGA.event({
      category: 'sandbox-query',
      action: 'query-success',
    })
    return data.data
  }
}

const settings = {
  profiles: Profiles,
  comments: Comments,
  posts: Posts,
}

export default function Sandbox(props) {
  const isBrowser = useIsBrowser()
  return isBrowser ? (
    <GraphiQL defaultTabs={settings[props.queries].values} storage={null} fetcher={fetcher} />
  ) : (
    <div>loading...</div>
  )
}

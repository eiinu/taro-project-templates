<%if (['react', 'preact'].includes(framework)) {-%>
import { Component<% if (typescript) {%>, PropsWithChildren<%}%> } from 'react'
<%}-%>
import { View } from '@tarojs/components'
import './listItem.<%= cssExt %>'

<%if (locals.typescript) {-%>
interface IListItem {
  name: string,
  value: string
}
<%}-%>

export default class ListItem extends Component<%if (locals.typescript) {-%><IListItem, any><%}-%> {
  render () {
    const { name, value } = this.props
    return (
      <View>
        <View>name: {name}</View>
        <View>value: {value}</View>
      </View>
    )
  }
}

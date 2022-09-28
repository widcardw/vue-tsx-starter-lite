import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Counter from '../src/components/Counter'

describe('Counter.tsx', () => {
  it('should render', () => {
    const wrapper = mount(Counter, { props: { initValue: 10 } })
    expect(wrapper.text()).toContain('10')
    expect(wrapper.html()).toMatchInlineSnapshot('"<button>count value is: 10</button>"')
  })

  it('should be interactive', async () => {
    const wrapper = mount(Counter, { props: { initValue: 0 } })
    expect(wrapper.text()).toContain('0')
    await wrapper.get('button').trigger('click')
    expect(wrapper.text()).toContain('1')
  })
})

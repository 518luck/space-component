import Space from './Space'
import { ConfigProvider } from './Space/ConfigProvider'

import './App.css'

function App() {
  return (
    <div>
      <ConfigProvider space={{ size: 20 }}>
        <Space direction='horizontal'>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
        </Space>
        <Space direction='vertical'>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
        </Space>
      </ConfigProvider>
    </div>
  )
}
export default App

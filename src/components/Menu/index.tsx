import { Menu as AntMenu } from 'antd';

export function Menu () {
  return (
    <AntMenu
      mode="horizontal"
      style={{
        fontFamily: 'Roboto',
        fontSize: '20px',
        textAlign: 'right',
        color: 'var(--primary-color)'
      }}
    >
      <AntMenu.Item style={{ marginRight: '5rem' }}>
        Quem sou eu?
      </AntMenu.Item>

      <AntMenu.Item style={{ marginRight: '5rem' }}>
        Projetos
      </AntMenu.Item>

      <AntMenu.Item style={{ marginRight: '5rem' }}>
        Contato
      </AntMenu.Item>
    </AntMenu>
  )
}
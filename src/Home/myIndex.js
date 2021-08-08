/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Button,
  Dropdown,
  Form,
  Input,
  Layout,
  Menu,
  Pagination,
  Popover,
  Select,
  Table
} from 'antd';
import 'antd/dist/antd.css';
import React, { Component } from 'react';
import capng from '../ca.png';
import depng from '../de.png';
import frpng from '../fr.png';
import logos from '../logo.jpg';
import './myCss.css';

const { Option } = Select;
const { Header, Content, Sider } = Layout;

//自定义组件SiderDemo
class SiderDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      mode: 'inline'
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  handleSubmit = () => {};
  render() {
    const { getFieldDecorator } = this.props.form;
    const { collapsed } = this.state;
    const columns = [
      {
        title: 'Invoice Id',
        dataIndex: 'id',
        width: 130,
        sorter: (a, b) => a.id - b.id,
        render: text => <a style={{ color: '#61b6cd' }}>{text}</a>
      },
      {
        title: 'Name',
        dataIndex: 'name',
        width: 180,
        sorter: (a, b) => a.age - b.age,
        render: text => (
          <div className='namebox'>
            <img src={logos} alt='logo'></img>
            {text}
          </div>
        )
      },
      {
        title: 'Email',
        width: 200,
        sorter: (a, b) => a.id - b.id,
        render: text => (
          <div className='emailbox'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='feather feather-mail'
            >
              <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
              <polyline points='22,6 12,13 2,6'></polyline>
            </svg>
            {text}
          </div>
        ),
        dataIndex: 'email'
      },
      {
        title: 'Date',
        width: 130,
        sorter: (a, b) => a.id - b.id,
        render: text => (
          <div className='datebox'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='feather feather-calendar'
            >
              <rect x='3' y='4' width='18' height='18' rx='2' ry='2'></rect>
              <line x1='16' y1='2' x2='16' y2='6'></line>
              <line x1='8' y1='2' x2='8' y2='6'></line>
              <line x1='3' y1='10' x2='21' y2='10'></line>
            </svg>
            {text}
          </div>
        ),
        dataIndex: 'date'
      },
      {
        title: 'Amount',
        width: 60,
        sorter: (a, b) => a.id - b.id,
        render: text => <div style={{ fontSize: '13px' }}>{text}</div>,
        dataIndex: 'amount'
      },
      {
        title: 'Status',
        width: 67,
        sorter: (a, b) => a.id - b.id,
        render: text => (
          <span
            className='statebox'
            style={{ color: text === 'Paid' ? '#1abc9c' : '#e7515a' }}
          >
            {text}
          </span>
        ),
        dataIndex: 'status'
      },
      {
        title: 'Actions',
        align: 'center',
        width: 71,
        render: text => (
          <Dropdown
            trigger='click'
            overlay={
              <Menu className='customMenu'>
                <Menu.Item>
                  <a className='action-edit'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      class='feather feather-edit-3'
                    >
                      <path d='M12 20h9'></path>
                      <path d='M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z'></path>
                    </svg>
                    <span>Edit</span>
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a className='action-delete'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      class='feather feather-trash'
                    >
                      <polyline points='3 6 5 6 21 6'></polyline>
                      <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path>
                    </svg>
                    <span>Delete</span>
                  </a>
                </Menu.Item>
              </Menu>
            }
            placement='bottomCenter'
          >
            <svg
              style={{ cursor: 'pointer' }}
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <circle cx='12' cy='12' r='1'></circle>
              <circle cx='19' cy='12' r='1'></circle>
              <circle cx='5' cy='12' r='1'></circle>
            </svg>
          </Dropdown>
        ),
        dataIndex: 'key'
      }
    ];
    const data = [
      {
        key: '1',
        id: '#098424',
        name: 'John Brown',
        email: 'alma.clarke@gmail.com',
        date: '10 Feb 2021',
        amount: '$234.40',
        status: 'Paid'
      },
      {
        key: '2',
        id: '#098434',
        name: 'Kelly Young',
        email: 'kingandy07@company.com',
        date: '20 Jan 2021',
        amount: '$334.40',
        status: 'Pending'
      },
      {
        key: '3',
        id: '#098224',
        name: 'Vincent Carpenter',
        email: 'maryDonald007@gamil.com',
        date: '30 Feb 2021',
        amount: '$34.40',
        status: 'Paid'
      },
      {
        key: '4',
        id: '#098524',
        name: 'Mary McDonald',
        email: 'niahillyer666@comapny.com',
        date: '40 Feb 2021',
        amount: '$24.40',
        status: 'Pending'
      }
    ];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          'selectedRows: ',
          selectedRows
        );
      },
      getCheckboxProps: record => ({
        disabled: false, // Column configuration not to be checked
        name: record.name
      })
    };
    return (
      <Layout style={{ background: '#060818', paddingLeft: '10px' }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div
            className='logo'
            style={{ justifyContent: collapsed ? 'none' : 'space-between' }}
          >
            <img src={logos} alt='logo'></img>
            <div className='sidebar'>
              <span className='nav-link'>CORK</span>
            </div>
          </div>
          <Menu
            theme='dark'
            mode='inline'
            defaultSelectedKeys={['1']}
            style={{ background: '#0e1726' }}
          >
            <Menu.Item key='1' className='MenuItem'>
              <div className='MenuItembox'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='feather feather-dollar-sign'
                >
                  <line x1='12' y1='1' x2='12' y2='23'></line>
                  <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'></path>
                </svg>
              </div>
              Invoice
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }}>
            <span
              style={{ color: '#fff', paddingLeft: '2%', fontSize: '1.4em' }}
            >
              <svg
                className='trigger'
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
                style={{ cursor: 'pointer' }}
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <line x1='3' y1='12' x2='21' y2='12'></line>
                <line x1='3' y1='6' x2='21' y2='6'></line>
                <line x1='3' y1='18' x2='21' y2='18'></line>
              </svg>
            </span>
            <span className='header-r-box'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='feather feather-search toggle-search'
              >
                <circle cx='11' cy='11' r='8'></circle>
                <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
              </svg>
              <Popover
                placement='bottom'
                content={
                  <div className='customPopover'>
                    <a href='javascript:void(0);'>
                      <img src={depng} alt='German' />
                      <span class='align-self-center'>&nbsp;German</span>
                    </a>
                    <a href='javascript:void(0);'>
                      <img src={frpng} alt='French' />
                      <span class='align-self-center'>&nbsp;French</span>
                    </a>
                  </div>
                }
              >
                <img src={capng} alt='ca' />
              </Popover>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='feather feather-mail'
              >
                <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
                <polyline points='22,6 12,13 2,6'></polyline>
              </svg>
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='feather feather-bell'
                >
                  <path d='M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9'></path>
                  <path d='M13.73 21a2 2 0 0 1-3.46 0'></path>
                </svg>
                <span class='badge badge-success'></span>
              </div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='feather feather-user'
              >
                <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
                <circle cx='12' cy='7' r='4'></circle>
              </svg>
            </span>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <div className='inv-list-top-section'>
              <Form
                layout='inline'
                onSubmit={this.handleSubmit}
                className='customForm'
              >
                <Form.Item label='Results' className='customFormItem'>
                  {getFieldDecorator('Results', {
                    initialValue: '5'
                  })(
                    <Select style={{ width: '75px' }} className='customSelect'>
                      <Option value='5'>5</Option>
                      <Option value='10'>10</Option>
                    </Select>
                  )}
                </Form.Item>
                <Form.Item className='customFormItem'>
                  <Button type='primary' htmlType='submit'>
                    Add New
                  </Button>
                </Form.Item>
                <Form.Item
                  className='customFormItem'
                  style={{ float: 'right' }}
                >
                  <Button className='btn-danger' htmlType='submit'>
                    Add New
                  </Button>
                </Form.Item>
                <Form.Item
                  className='customFormItem'
                  style={{ float: 'right' }}
                >
                  <Input placeholder='Search...' className='customSearch' />
                  <span className='customSearchSvg'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      class='feather feather-search'
                    >
                      <circle cx='11' cy='11' r='8'></circle>
                      <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
                    </svg>
                  </span>
                </Form.Item>
              </Form>
            </div>
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data}
              pagination={false}
              style={{ minWidth: 1250, overflowX: 'auto' }}
              // scroll={{ x: collapsed ? 1200 : 1250 }}
            />
            <div className='customTable'>
              <div class='dataTables_info'>Showing page 1 of 2</div>
              <Pagination size='small' total={40} className='cutomPagination' />
            </div>
            {/* <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

//输出组件
const WrappedDemo = Form.create()(SiderDemo);

export default WrappedDemo;

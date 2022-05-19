import CommonHead from '@/components/CommonHead'
import React from 'react'
import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Title } from './components/Title'
import { SideBar } from './components/SideBar'
import JumpToTopButton from './components/JumpToTopButton'
/**
 * 基础布局 采用左右两侧布局，移动端使用顶部导航栏

 * @returns {JSX.Element}
 * @constructor
 */
const LayoutBase = props => {
  const { children, meta } = props
  return (
        <div className='dark:text-gray-300'>
            <CommonHead meta={meta} />
            {/* 顶栏LOGO */}
            <Header {...props} />

            {/* 菜单 */}
            <Nav {...props} />

            {/* 主体 */}
            <div id='wrapper' className="w-full">

                <Title {...props} />

                <div className="container mx-auto justify-center md:flex items-start py-8 px-2">

                    <div className='w-full max-w-3xl xl:px-14 lg:px-4 '>{children}</div>

                    <SideBar {...props} />

                </div>

              <div className='h-screen w-screen fixed left-0 top-0 bg-white dark:bg-black' style={{ zIndex: -2 }}/>

            </div>

            <Footer {...props} />

            <div className='fixed right-4 bottom-4'>
                <JumpToTopButton />
            </div>
        </div>
  )
}

export default LayoutBase

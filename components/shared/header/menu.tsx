import { EllipsisVertical, ShoppingCart, UserIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ModeToggle from './mode-toggle'
import Link from 'next/link'
import { SheetContent, Sheet, SheetTitle, SheetTrigger } from '@/components/ui/sheet'


const Menu = () => {
    return ( <div className="flex justify-end gap-3">
        <nav className="hidden md:flex w-full max-x-xs gap-1">
            <ModeToggle />
            <Button asChild variant='ghost'>
                <Link href='/cart'>
                    <ShoppingCart />Cart
                </Link>
            </Button>
            <Button asChild variant='ghost'>
                <Link href='/sign-in'>
                    <UserIcon />Sign In
                </Link>
            </Button>
        </nav>
        <nav className='md:hidden'>
            <Sheet>
                <SheetTrigger className='align-middle'>
                    <EllipsisVertical />
                </SheetTrigger>
                <SheetContent className='flex flex-col items-start' >
                    <SheetTitle>Menu</SheetTitle>
                    <ModeToggle />
                    <Button asChild variant='ghost'>
                        <Link href='/cart'>
                            <ShoppingCart />Cart
                        </Link>
                    </Button>
                    <Button asChild variant='ghost'>
                        <Link href='/sign-in'>
                            <UserIcon />Sign In
                        </Link>
                    </Button>
                </SheetContent>
            </Sheet>
        </nav>
    </div> );
}
 
export default Menu;
<script>
	import '../app.css';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem } from 'flowbite-svelte'
</script>
	<Navbar class="border border-gray-700 border-opacity-100 bg-slate-300 container rounded-2xl m-1 w-auto">
		<NavBrand href='/'>
			<img src="/0.jpg" alt="" class="h-32 w-36 rounded-3xl">
		</NavBrand>
		<NavHamburger/>
		<NavUl class='mx-auto my-auto'>
			<!-- svelte-ignore a11y-missing-attribute -->
			<a>
				<div class="cursor-pointer text-3xl mr-2 text-slate-600  hover:bg-slate-400  hover:text-gray-200">Courses</div>
				<Dropdown class="w-44 z-20 ">
					<DropdownItem href="/courses/1" target='_blank'>Course 1</DropdownItem>
					<DropdownItem href="/courses/2" target='_blank'>Course 2</DropdownItem>
					<DropdownItem href="/courses/3" target='_blank'>Course 3</DropdownItem>
					<DropdownItem href="/courses/4" target='_blank'>Course 4</DropdownItem>
					<DropdownItem href="/courses/5" target='_blank'>Course 5</DropdownItem>
				  </Dropdown>
			</a>
			  <a href='/paints' target='_blank'>
				<div class='cursor-pointer text-3xl ml-10 text-slate-600  hover:bg-slate-400  hover:text-gray-200'>Paints</div>
			</a>
		</NavUl>
	</Navbar>

<slot/>

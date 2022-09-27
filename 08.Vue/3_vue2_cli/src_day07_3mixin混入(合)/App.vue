<template>
	<div>
		<School/>
		<hr>
		<Student/>
	</div>
</template>

<script>
	import School from './components/SchoolM'
	import Student from './components/StudentM'

	export default {
		name:'App',
		components:{School,Student}
	}
</script>

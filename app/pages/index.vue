<template>
	<div class="flex gap-5">
		<DraggableContainer>
			<template #title>
				<div>About me</div>
			</template>
			<template #content>
				<p>
					Computational linguistics graduate turned fullsack .NET
					Developer working at the Kings County District Attorney's
					Office.
				</p>
				<p>
					Here I develop RESTful applications for legal staff to
					perform CRUD operations on complex legal data
				</p>
			</template>
		</DraggableContainer>
		<DraggableContainer>
			<template #title>
				<div>My Research</div>
			</template>
			<template #content>
				<p>
					My graduate research focused on using advanced stylometric
					feature extraction to embed language data into
					high-dimensional vectors.
				</p>
				<p>
					These vectors were then used for authorship attribution, the
					task of automatically identifying the author of a document.
				</p>
			</template>
		</DraggableContainer>
		<!-- <DraggableContainer>
			<template #title>
				<div>Skills</div>
			</template>
			<template #content>
				<p>
					Frontend: TypeScript, JavaScript, Angular, Bootstrap CSS,
					VueJS, NuxtJS
				</p>
				<p>
					Backend: SQL Server, T-SQL, ASP.NET Core, .NET, C#, Python
				</p>
			</template>
		</DraggableContainer>
		<DraggableContainer>
			<template #title>
				<div>Hobbies</div>
			</template>
			<template #content>
				<p>
					Coding, Reading, Birdwatching, Long walks, Videogames,
					Making pixel art
				</p>
			</template>
		</DraggableContainer> -->
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

<template>
  <div class="w-full">
    <LayoutsMobileTopbar class="block lg:hidden" />
    <div class="flex w-full flex-col bg-dark-900 text-white md:flex-row">
      <LayoutsLeftSidebar
        class="sticky bottom-0 top-0 hidden h-screen w-[10%] lg:block"
      />
      <main
        class="h-fit w-full flex-1 border border-x-dark-500 border-y-transparent px-5 md:px-10"
      >
        <slot />
      </main>
      <LayoutsRightSidebar
        class="sticky bottom-0 top-0 hidden h-screen w-[10%] lg:flex"
      />
    </div>
  </div>
</template>

<style scoped></style>

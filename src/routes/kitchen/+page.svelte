<script lang="ts">
  import kitchen from '$lib/images/Kitchen.png';

  const debugFurniture = true;

  const furniture = [
    {
      id: 'kitchen-livingRoom',
      link: '/',
      styles: {
        top: '28%',
        left: '24%',
        width: '9%',
        height: '12%',
        transform: 'skew(1deg, 334deg)'
      }
    }
  ];
</script>

<div class="isometric relative">
  {#each furniture as item}
    <a href={item.link}>
      <div
        class={`absolute z-10 cursor-pointer${debugFurniture ? ' border-2 border-red-500' : ''}`}
        style:top={item.styles.top}
        style:left={item.styles.left}
        style:width={item.styles.width}
        style:height={item.styles.height}
        style:transform={item.styles.transform}
      />
    </a>
  {/each}
  <img src={kitchen} alt="Welcome" />
</div>

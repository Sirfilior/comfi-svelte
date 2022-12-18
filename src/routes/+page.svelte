<script lang="ts">
  import livingroom from '$lib/images/LivingRoom.png';
  import config from '$lib/config';

  const furniture = [
    {
      id: 'library',
      link: '/library',
      styles: {
        top: '43%',
        left: '6%',
        width: '12%',
        height: '25%',
        transform: 'skew(1deg, 334deg)'
      }
    },
    {
      id: 'kitchen',
      link: '/kitchen',
      styles: {
        top: '70%',
        left: '38%',
        width: '21%',
        height: '13%',
        transform: 'skew(305deg, 32deg)'
      }
    },
    {
      id: 'pc_shop',
      link: '/stash/livingroom',
      styles: {
        top: '36%',
        left: '32%',
        width: '6.5%',
        height: '8.8%',
        transform: 'skew(0deg, -25deg)'
      }
    }
  ];
</script>

<div class="isometric relative">
  {#each furniture as item}
    <a href={item.link}>
      <div
        class={`absolute z-10 cursor-pointer${
          config.DEBUG_FURNITURE ? ' border-2 border-red-500' : ''
        }`}
        style:top={item.styles.top}
        style:left={item.styles.left}
        style:width={item.styles.width}
        style:height={item.styles.height}
        style:transform={item.styles.transform}
      />
    </a>
  {/each}
  <img src={livingroom} alt="Welcome" />
</div>

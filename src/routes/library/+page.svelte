<script lang="ts">
  import library from '$lib/images/Library.png';

  const debugFurniture = true;

  const furniture = [
    {
      id: 'library-livingRoom',
      link: '/',
      styles: {
        top: '64%',
        left: '63%',
        width: '9%',
        height: '18%'
      }
    },
    {
      id: 'bookshelf1',
      link: '/stash/library',
      styles: {
        top: '32%',
        left: '51%',
        width: '42%',
        height: '22%',
        transform: 'skew(0deg, 32deg)'
      }
    },
    {
      id: 'bookshelf2',
      link: '/stash/library',
      styles: {
        top: '27%',
        left: '23%',
        width: '28%',
        height: '23%',
        transform: 'skew(0deg, -32deg)'
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
  <img src={library} alt="Welcome" />
</div>

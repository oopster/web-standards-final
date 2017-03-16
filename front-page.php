<?php get_header(); ?>
  <main id="content">
    [front page template]

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

      <?php the_content(); ?>

    <?php endwhile; endif; ?>

  </main>
  <aside class="sidebar">
    <?php if ( ! dynamic_sidebar( 'front-ad' ) ): ?>
      Add content here
    <?php endif; ?>
  </aside>
<?php get_footer(); ?>

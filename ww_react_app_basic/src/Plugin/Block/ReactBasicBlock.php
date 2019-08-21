<?php

namespace Drupal\ww_react_app_basic\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'ReactBasicBlock' block.
 *
 * @Block(
 *  id = "ww_react_app_basic_block",
 *  admin_label = @Translation("React basic block"),
 * )
 */
class ReactBasicBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['react_basic_block']['#markup'] = 'Implement ReactBasicBlock.';

    return $build;
  }

}

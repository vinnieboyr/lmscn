import {
  FillBlankPreview,
  FlashcardsPreview,
  HotspotPreview,
  MatchPreview,
  OrderPreview,
  ProgressTrackerPreview,
  QuizPreview,
  ReadingPassagePreview,
  ScramblePreview,
  SpacedRepetitionPreview,
} from '@/components/previews/lms-previews';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    QuizPreview,
    FlashcardsPreview,
    MatchPreview,
    FillBlankPreview,
    ScramblePreview,
    OrderPreview,
    ReadingPassagePreview,
    ProgressTrackerPreview,
    SpacedRepetitionPreview,
    HotspotPreview,
    ...components,
  };
}

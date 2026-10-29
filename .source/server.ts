// @ts-nocheck
import * as __fd_glob_14 from "../content/docs/spaced-repetition.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/scramble.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/reading-passage.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/quiz.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/progress-tracker.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/order.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/match.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/installation.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/hotspot.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/guide.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/gallery.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/flashcards.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/fill-blank.mdx?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, }, {"fill-blank.mdx": __fd_glob_1, "flashcards.mdx": __fd_glob_2, "gallery.mdx": __fd_glob_3, "guide.mdx": __fd_glob_4, "hotspot.mdx": __fd_glob_5, "index.mdx": __fd_glob_6, "installation.mdx": __fd_glob_7, "match.mdx": __fd_glob_8, "order.mdx": __fd_glob_9, "progress-tracker.mdx": __fd_glob_10, "quiz.mdx": __fd_glob_11, "reading-passage.mdx": __fd_glob_12, "scramble.mdx": __fd_glob_13, "spaced-repetition.mdx": __fd_glob_14, });
---
sidebar_position: 4
title: 'Documentation Style Guide'
description: How Nebula Labs docs are supposed to look.
---

## Overview

This is the primary reference for the key elements of Nebula Labs' documentation style. It is not intended to show you how to write Nebula Labs documentation, but to help you ensure that your writing is consistent with other Nebula Labs docs. It focuses on the key elements of textual formatting, grammar, and usage.

**Note** This guide will be updated as usage issues emerge and are resolved. Please contact Nebula Labs leadership if you would like to make any changes or additions.

## Format

### Titles

Page titles should use title-case — captitalizing all major words. Use present tense and active verbs. Do not use end punctuation. 50-60 characters should be the target length.

#### Examples

- **Yes**
  - Get Class Section
- **No**
  - Getting class section

### Headings

Headings should use sentence-case where only the beginning word is capitalized. Proper nouns should be capitalized. Should describe section clearly. Use present tense and active verbs. Do not use end punctuation. Do not use '&' unless part of a proper noun.

- H1 (Markdown: #) — Page title.
- H2 (Markdown: ##) — Major page sections. Generates nav entry.
- H3 (Markdown: ###) — Sub-sections. Generates nav entry.
- H4 (Markdown: ####) — Only if required. Use for headings without nav entry.
- H5+ - Do not use!

Do not use `code` (Markdown: ``) formatting in headers.

#### Examples

- **Yes**
  - Clone the repository
- **No**
  - Clone the Repository.

### Paragraphs

Paragraphs should not begin with an indentation. Separate paragraphs with a single line.

#### Examples

- **Yes**

  This is a great paragraph. There is a lot of information here. You understand what is going on.

  This is another great paragraph.

### Ordered and unordered lists

Always use ordered (numbered) or unordered (bulleted) lists rather than long (four or more) comma- or semicolon-separated lists within a paragraph. Use ordered lists for sequential steps such as a set procedure. Use unordered lists for related items with no specific sequence.

Unordered lists should have items ordered alphabetically. All list items that are sentences or phrases should end with a period. List items with fewer than three words should not end with a period. Do not start a line with numeric value — rewrite as a word if necessary.

Items in lists should begin with a capital unless it does not make sense (specific commands). Keep list entries uniform in structure. Nested lists should not be more than two deep.

#### Examples

- **Yes**
  - Include information such as:
    - address
    - contact information
    - name
  - Retrieve documentation style information:
    1. Navigate to the Nebula Labs Maintainer Docs.
    2. Click into **The Nebula Aesthetic > Documentation Style Guide**.
- **No**
  - Include information such as:
    - name
    - contact information
    - address
  - To retrieve documentation style information, navigate to the Nebula Labs Maintainer Docs and click into **The Nebula Aesthetic > Documentation Style Guide**.
  - Retrieve documentation style information by:
    - Navigating to the Nebula Labs Maintainer Docs.
    - Clicking into **The Nebula Aesthetic > Documentation Style Guide**.

### Italics

Use italics for titles of:

- books
- movies
- newspapers
- TV shows

Italics should not be used when referencing shorter works like blog posts, articles, or reports. Use double quotes instead.

You can also use italics when emphasis is necessary.

#### Examples

- **Yes**
  - _Dune_ was an interesting movie.
  - _Do not_ select the first option.
  - The article "What Are APIs?" explains...
- **No**
  - "Dune" was an interesting movie.
  - **DO NOT** select the first option.
  - The article _What Are APIs?_ explains...

### Bold

Use bold for user interface items that readers will interact with including:

- buttons
- checkboxes
- names of tabs
- names of menus
- text-entry fields
- toggles

Bold the first mention of a resource in API reference pages. The titles of Nebula Labs pages, when referenced by other pages, should be bolded.

#### Examples

- **Yes**
  - Navigate to **Maintainer Docs > Documentation Style Guide**.
  - Click **Contact Us** in the main navigation menu.
  - A **Section** resource can be obtained by...
- **No**
  - Navigate to the Documentation Style guide within Maintainer Docs.
  - Click "Contact Us" in the main navigation menu.
  - A "Section" resource can be obtained by...

### Code

Use code format for text or values that the user will enter into a user interface. This includes. Code should be used for:

- Contents of a text field.
- A command line tool argument.
- Element in code.
- Files and filename extensions.
- Computer code identifiers such as variable or function names.
- Code values with a specific meaning (true, false, null, nul, NaN).
- Placeholders for data or values the developer will enter. Placeholders are wrapped with braces (<\>).
- Constants, which should be written in `UPPER_SNAKE_CASE`.
- HTTP verbs such as `GET` or `POST`.

Do not use code format in headers.

#### Examples

- **Yes**
  - Input your `<AUTH_TOKEN>` to gain access.
  - The `count` variable will hold the total...
  - Use the `compute()` function...
- **No**
  - Input your _AUTH_TOKEN_ to gain access.
  - The **count** variable will hold the total...
  - Use the `compute` function...

### File types and formats

When talking about file types, use the name of the creator application (if it's a unique format) or the file type for generic formats. Only use file extensions in this context if it would be ambiguous if you didn't.

Do not use code formatting when discussing file types, ie. not file extension, and ensure the name is capitalized as per the Abbreviations rules.

#### Examples

- **Yes**
  - For this tutorial, you will need to download the following JPEG file.
  - For this tutorial, you will need to download the following Photoshop file.
  - For this tutorial, you will need a PNG image.
- **No**
  - For this tutorial, you will need to download the following .jpg file.
  - For this tutorial, you will need to download the following .psd file.
  - For this tutorial, you will need a .png image.

### Capitalization

Capitalize all proper nouns. You must also capitalize:

- Product names
- Job titles
- Agency names (Department of Justice)
- Abbreviations pronounced letter by letter (FAQ, IRS, PBS, YAML, API).
  - Exceptions include JSON, NASA, SIM.
  - Products designated to be a specific case like npm stay in lower case.
- Abbreviations pronounced as a full word (Nascar, Defra).
- API resource names (Section, Meeting)
  - Multi-word resources should be in UpperCamelCase (AcademicSession).
- Titles of books, magazines, newspapers, movies, TV shows, and documents.
- First word of every bulleted or numbered list.
- First word of every sentence.
- Nebula Labs products (Nebula Planner)

#### Examples

- **Yes**

  - Retrieve an **AcademicSession** resource from this endpoint. The AcademicSession contains these...
  - Refer to the FAQ page for more information.

- **No**
  - Retrieve an academic_session resource from this endpoint. The academic_session contains these...
  - Refer to the "Faq" page for more information.
  - ASCII
  - RAM

### Numbers

Numbers zero through nine should be written as words. Numbers above none should be written numerically. Be consistent — if one numeral in a group requires a numeric representation, override the rules above and write all numbers numerically. Only include commas in values greater than 999. Do not start a sentence with a numeral — rewrite to avoid this or spell out the number.

#### Examples

- **Yes**

  - One article has 16 pages, one has 7 pages, and a third has only 5 pages.
  - Select up to two icons from the list.
  - Enter up to 10,000 values before saving.
  - Twelve apps are included in the directory.

- **No**
  - One article has 16 pages, one has seven pages, and a third has only five pages.
  - Select up to 2 icons from the list.
  - Enter up to ten thousand values before saving.
  - 12 apps are included in the directory.

### Dates and times

Use the format **month day, year** (September 23, 2022) for dates. Use the format **hour:minute** (1:15) for times. Add **pm** or **am** without a space after the time (1:15pm). When adding time zones, append them after the time.

#### Examples

- **Yes**

  - October 2, 2022
  - 1:15am +CDT

- **No**
  - 10/2/2022
  - 1:15 a.m. CDT

### Ranges

Use dash notation with an en dash for specific numeric ranges (1-10). Ranges can run FROM one thing TO another, or one value THROUGH another value, or take values BETWEEN x AND y — do not mix these forms. Add inclusive after a range if you need to be explicit that all of the values expressed are included.

#### Examples

- **Yes**

  - 1-100 inclusive
  - You can input between one and five values.

- **No**
  - 1 to 100
  - You can input between 1 to five values.

### Strokes

When using strokes (/) for either/or options or alternative names for the same entity, do not place spaces on either side of the stroke

#### Examples

- **Yes**

  - Charity/501(c)(3) organizations should take advantage of...

- **No**
  - Charity / 501(c)(3) organizations should take advantage of...

### Links

Links should be used as frequently as possible. Ensure that the linked text is relevant. Try to include links to sections in the document where it makes sense to do so. Do not include links to the same document multiple times on a page unless linking by anchor to specific parts of the document.

Never include the spaces on either side of the linked text in the link. Linked text should be descriptive as to where it is being directed to. Avoid using linked text like "here" or "learn more".

Link to anchors using '#'

> /docs/maintainers/design/style#links

#### Examples

- **Yes**

  - You can learn more with a [getting started guide](https://www.example.com).
  - Find out more by reading the [Section API reference page](https://www.example.com).

- **No**
  - You can learn more [here](https://www.example.com).
  - Find out more by reading this page [https://www.example.com](https://www.example.com).

### Quotation marks

Do not use quotation marks in place of other formatting. For example, a variable name in a block of code should always be presented in `code` format — not in quotes.

Full sentence quotations should include the end punctuation within the quotation marks, but quoted phrases should not.

When quoting other documents, use double quotes. When using quotes to highlight colloquialism, use single quotes. For single characters, use single quotes. Otherwise, use double quotes.

#### Examples

- **Yes**

  - "We will continue to grow as a company," said Tom.
  - Nebula Labs will "continue to grow", its CEO revealed today.
  - Use '#' to link to anchors on a page.

- **No**
  - "We will continue to grow as a company", said Tom.
  - Nebula Labs will "continue to grow," its CEO revealed today.
  - Use "#" to link to anchors on a page.

### Abbreviations

Abbreviations may be common terminology, but reinforcing their meanings to an audience should be prioritized. Do not spell out abbreviations that are more recognizeable than the full words, e.g. SMS, NASA unless you specifically need to do so.

If you expect to refer to a phrase throughout the text and want to save space, write the text in full and include the abreviation in parentheses after. Avoid the possessive form when using an abbreviation.

#### Examples

- **Yes**

  - The frequently asked question (FAQ) section of the document describes everything.
  - NASA is a large organization.
  - The SMS message will be sent to your phone.

- **No**
  - The FAQ section of the document describes everything.
  - The National Aeronautics and Space Administration is a large organization.
  - The FAQ's purpose is to...

### Notes

When you are including a key point as a note, prefix the phrase or paragraph with **Note** and write the body of the note as a new, unemphasized sentence.

#### Examples

- **Yes**

  - **Note** The resource may not exist.

- **No**
  - Note that the resource may not exist.
  - **Note** that all new users may not have accepted the account terms yet.

### Pictures

Screenshosts should be avoided unless they really do make a point more clearly than text can, or the UI is very complex. Screenshots can quickly go out of date due to frequent UI changes.

Do not use screenshots for:

- Install and uninstall wizards unless there is something really unusual about a lot of the settings.
- Login pages
- Standard dialog windows (open, save).
- Long drop-down lists
- Individual buttons, use text instead.
- Anything that is already described in detail or included in other screenshots.
- Pieces of code

When using screenshots:

- Do not include any window shadow in the grab.
- Crop down to the key user interface element.
- Only use PNG, GIF, or JPG files.
- Obscure/blur out confidential information such as API keys or login credentials.

### Tables

Table headers should be upper sentence case (SDK Release Version). Table headers should be in bold. Only columns containing narrow text or boolean values (Yes/No) or numbers should be centered. All other columns should be left aligned.

Cells containing full sentences should end with a period. All other columns should not.

## Punctuation and grammar

### General

Punctuation indicates the rhythm of a sentence and is used to help the reader understand its meaning. Speak the sentence you are writing aloud to clarify where punctuation is needed. Do not over-punctuate — you ruin how well the reader can understand the sentence. Break the sentence into smaller, separate sentences instead.

### Spelling

American English should be used for all spelling. It is a good idea to set your writing tools accordingly.

- "Color" over "Colour"
- "Install" over "Instal"
- "Favor" over "Favour"

### Sentences

Sentences contain a verb. Ensure that sentences are not ambiguous and that they don't confuse objects and subjects. Keep sentences short and simple. If you include too many sub-clauses, the reader may lose track.

Separate sentences with a single space, not two or more. Paragraphs should be no more than five sentences and should be broken up into smaller paragraphs if possible.

### Commas

Use the Oxford comma in short lists before the final "and". For example:

- Nebula Planner is available on Safari, Chrome, and Edge.

For complex lists, separate major items with semicolons or an unordered list. _Do not_ overuse commas with lists. Instead, use unordered or ordered lists in their place.

### Apostrophes

Apostrophes indicate a missing character or a possessive case. They are useful when attempting to convey informality which is advantageous when making the docs appear more engaging and accessible.

Possessive plurals add the apostrophe after the last 's'. Do not include apostrophes in plurals unless you are using the possessive form. This includes abbreviations (PCs).

### Dashes

Use dashes to separate groups of words that are normally semi-independent sub-clauses. Use long em-dashes and not hyphens or double hyphens.

- Mac: **Option + Shift + -**
- Windows (with numeric pad): **Alt + 0151**

Use hyphens to specify ranges (1-10). Hyphens should not be mistaken for em-dashes.

Dashes should be separated from surronding words with a single space unless using them for numeric ranges.

### Parentheses

Parentheses should only be used to separate brief phrases which act as clarifications of the text before it including abbreviation definitions. Using em-dashes instead of parentheses is preferred.

### Ellipses

Do use ellipses (...) to indicate omitted text. Ellipses should not be used to suggest an unspoken concept.

### Exclamations

Avoid overuse of exclamations — they quickly come across as informal. Exclamations should rarely be used or needed in technical documentation unless bringing attention to a point.

### Quantities

Write about an amount of a substance and a number of things. Generally, use fewer for quantities of things and less for quantities of substances.

## Guidance

The Nebula Labs documentation style is clear, concise, but informal. Ensure that your writing is easily understood by a student/novice audience. **Say more with less**.

### Person

Always use second-person pronouns (you, your) and avoid all first person (I, we, us).

### Inclusion

Avoid gender-specific pronouns. Use neutral terms instead such as "they" and "them". Do not use language that is derogatory or not inclusionary or that may be perceived that way by a race, nation, or gender identity.

### JSON

For JSON data, use the term "property" for a key-value pair of the JSON object. Use "property name" for the key and "property value" for the value. You can use name and value for shorthand within the same paragraph if the meaning is clear.

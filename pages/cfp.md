---
title: Call for Papers
layout: page-fullwidth
order: 0
permalink: /cfp/
header:
  image_fullwidth: "irvine-header.jpg"
---


**2nd Conference on Automated Knowledge Base Construction (AKBC)**<br>
June 22-24, 2020, Monday-Wednesday, Irvine, CA<br>
Homepage: [http://www.akbc.ws](http://akbc.ws)<br>
Email: [info@akbc.ws](mailto:info@akbc.ws)<br>


### Key dates
**Abstract submission deadline: February 6. 2020**<br>
Paper submission deadline: February 13, 2020<br>
Notification of acceptance: April 20, 2020<br>
Conference & Workshop Dates: June 22-24, 2020<br>


### Knowledge Base Construction
Knowledge gathering, representation, and reasoning are among the fundamental challenges of artificial intelligence.  Large-scale repositories of knowledge about entities, relations, and their abstractions are known as “knowledge bases”.  Most major technology companies now have substantial efforts in knowledge base construction. Related scholarly work spans many research areas, including machine learning, natural language processing, computer vision, information integration, databases, search, data mining, knowledge representation, human computation, human-computer interfaces, and fairness.  The AKBC conference serves as a research forum for all these areas, in both academia and industry.

### New Conference
Nearly ten years after the first AKBC workshop in Grenoble, France, AKBC has become a conference, with its widely-acclaimed first instantiation last year in Amherst MA.  Why a new stand-alone conference?
- Long-standing and growing interest in the area, now with too much material for a one-day workshop.  We have sufficient material for a two-day conference plus topical workshops.
- We want to grow and connect the community beyond existing individual conference communities, bringing together ML, NLP, DB, IR, KRR, semantics, reasoning, common sense, QA, human computation, dialog, HCI.
- We want to set our own culture, including reviewing practices, and meeting format. We have fond memories of the first AKBC 2010 in Grenoble: a two-day meeting that included an afternoon hike in the Alps with much great scientific discussion.
- Why now?  Growing interest across many areas.  Disconnect among multiple relevant communities.  Growing industry and government interest.  Many of the long-existing conferences have grown uncomfortably large; a new, smaller conference can be more intimate, hospitable, and supportive.


### Call for Papers
We invite the submission of papers describing previously unpublished research, including new methodology, datasets, evaluations, surveys, reproduced results, negative results, and visionary positions.

Topics of interest include, but are not limited to:
- Natural language processing, information extraction, extraction of entities, relations, and events, semantic parsing, coreference, machine reading, entailment, web mining, multilingual NLP.
- Information integration, entity resolution, schema & ontology alignment, text and structure alignment, federated KBs, Semantic Web.
- Machine learning, supervised, unsupervised, lightly-supervised and distantly-supervised learning, deep learning, symbolic learning, multimodal learning, embeddings of knowledge.
- Search, question-answering, reasoning, knowledge base completion, queries on mixtures of structured and unstructured data; querying under uncertainty.
- Multi-modal knowledge bases: structured data, text, images, video, audio.
- Human-computer interaction, crowdsourcing, interactive learning.
- Fairness, accountability, transparency, misinformation, multiple viewpoints, uncertainty.
- Databases, probabilistic databases, distributed databases, database cleaning, scalable computation, distributed computation, dynamic data, online adaptation of knowledge.
- Systems, languages and toolkits, demonstrations of existing knowledge bases.
- Evaluation of AKBC, datasets, evaluation methodology.

Authors of accepted papers will have the option for their conference paper to be archival (with full text in AKBC Proceedings, and be considered for best paper awards) or non-archival (listed in AKBC Conference schedule, with full text in OpenReview, and the flexibility to also submit elsewhere).  Double-blind reviewing will be performed on the OpenReview platform, with papers, reviews and comments publicly visible, much like ICLR 2020.

Papers should be restricted to 10 pages excluding references (the equivalent of about 8 pages double column).
Appendices can be included beyond the references in the same PDF file, but may be ignored by the reviewers.

We will follow a double-blind review process, and thus the submissions should not have any identifiable information about the authors.
This includes not only the authors on the first page, but also any other information that betrays the identity, such as using first person pronouns when self-citing, URLs that include name of the authors/organization, etc.
These restrictions apply to the appendices as well.

All submissions must be formatted with LaTeX using the following LaTeX source: [akbc-latex.zip](https://github.com/akbc-conference/style-files/blob/master/akbc-latex.zip?raw=true)

For submission, do not include the `\finalcopy` flag.

Note that submissions will be made publicly available immediately after the submission deadline (see the review process for more details).

### Submission Site: [http://www.akbc.ws/2020/submission](http://www.akbc.ws/2020/submission)

### Reviewing Process

We are following an open reviewing paradigm that solicits public discussion of the reviews, and allows authors to submit revisions that address reviewer comments, before decisions are made.
The contents of all reviews will be public and generally visible to users logged into <a href="https://www.openreview.net">OpenReview.net</a>.
The contents of submitted reviews are not visible by reviewers who have not submitted their own reviews.
Reviewer names are only visible to the area chairs (and are *not* visible to the public, other reviewers, or the authors).

###  Dual Submission Policy

Submissions that are identical (or substantially similar) to versions that have been previously published, or accepted for publication, are not allowed and violate our dual submission policy.
However, papers that cite previous related work by the authors and papers that have appeared on non-peered reviewed websites (like arXiv) or that have been presented at workshops (i.e., venues that do not have publication proceedings) do not violate the policy.
The policy is enforced during the whole reviewing process period.


### Invited Talks
<div class="row">
<div class="columns">
{% for invited-talk in site.data.invited-talks %}
<a href="{{ invited-talk.speaker.url }}">{{ invited-talk.speaker.name }}</a>, {{ invited-talk.speaker.location }}<br>
{% endfor %}
</div>
</div>


### Workshops
In addition to the two-day conference program, we will have a one-day collection of workshops on focused topics.

### Organizers
{% for organizer in site.data.organizers %}
<div class="row">
<div class="small-3 large-3 columns">
{{ organizer.position }}<br>
</div>
<div class="small-9 large-9 columns">
<a href="{{ organizer.url }}">{{ organizer.name }}</a>, {{ organizer.location }}<br>
</div>
</div>
{% endfor %}


### Area Chairs
<div class="row">
<div class="columns">
{% for area-chair in site.data.area-chairs %}
<a href="{{ area-chair.url }}">{{ area-chair.name }}</a>, {{ area-chair.location }}<br>
{% endfor %}
</div>
</div>

<br>
**Questions? Please mail: [info@akbc.ws](info@akbc.ws)**
<br>

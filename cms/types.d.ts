export type Animation = {
    duration?: number;
    effect?: string;
    stagger?: number;
};
export type PermanentFiltersRange = {
    from?: number;
    to?: number;
    type?: string;
};
export type PermanentFiltersValue = {
    id?: string;
    type?: string;
    value?: string;
};
export type PermanentFilters = {
    groupType?: string;
    id?: string;
    range?: PermanentFiltersRange;
    values?: PermanentFiltersValue[];
    where?: string[];
};
export type StartingFilterRange = {
    from?: number;
    to?: number;
};
export type StartingFilter = {
    group?: string;
    groupType?: string;
    id?: string;
    range?: StartingFilterRange;
    values?: string[];
};
export type UIButton = {
    activeClass?: string;
    disabledClass?: string;
};
export type UICheckbox = {
    activeClass?: string;
    disabledClass?: string;
};
export type UIInput = {
    activeClass?: string;
    disabledClass?: string;
    minWords?: number;
    multipleValues?: boolean;
    triggerTime?: number;
};
export type UIRadioButton = {
    activeClass?: string;
    disabledClass?: string;
};
export type UISelect = {
    activeClass?: string;
    disabledClass?: string;
};
export type UIToggle = {
    activeClass?: string;
    disabledClass?: string;
};
export type UI = {
    button?: UIButton;
    checkbox?: UICheckbox;
    input?: UIInput;
    radioButton?: UIRadioButton;
    select?: UISelect;
    toggle?: UIToggle;
};
export type Filters = {
    hideInvalidFilters?: boolean;
    permanentFilters?: PermanentFilters[];
    startingFilters?: StartingFilter[];
    ui?: UI;
};
export type Loader = {
    skeletonTransitionAfterLoad?: boolean;
    type?: string;
};
export type Pagination = {
    activeClass?: string;
    disabledClass?: string;
    hideDuringLoading?: boolean;
    inlineLoader?: boolean;
    maxButtons?: number;
    page?: number;
    pageItems?: number;
    scrollPercentage?: number;
    textEnd?: string;
    textLoad?: string;
    textNext?: string;
    textPrev?: string;
    textStart?: string;
    type?: string;
};
export type Settings = {
    includeCreatedInfo?: boolean;
    includePublishedInfo?: boolean;
    includeUpdatedInfo?: boolean;
    limit?: number;
    name?: string;
    projectID?: string;
    showArchivedItems?: boolean;
    showDraftItems?: boolean;
    spotbaseID?: string;
    start?: number;
};
export type DefaultSortField = {
    params?: Object;
    type?: string;
    value?: string;
};
export type DefaultSort = {
    direction?: string;
    field?: DefaultSortField;
    group?: string;
    priority?: number;
    where?: string[];
};
export type StartingSort = {
    direction?: string;
    field?: string;
    group?: string;
};
export type SortUIButton = {
    activeClass?: string;
    disabledClass?: string;
};
export type SortUISelect = {
    activeClass?: string;
    disabledClass?: string;
};
export type SortUIToggle = {
    activeClass?: string;
    disabledClass?: string;
};
export type SortUI = {
    button?: SortUIButton;
    select?: SortUISelect;
    toggle?: SortUIToggle;
};
export type Sort = {
    defaultSort?: DefaultSort[];
    hideInvalidSort?: boolean;
    startingSort?: StartingSort[];
    ui?: SortUI;
};
export type StatesErrorView = {
    textRetry?: string;
};
export type States = {
    errorView?: StatesErrorView;
};
export type URLParams = {
    enabled?: boolean;
};
export type Config = {
    animation?: Animation;
    filters?: Filters;
    loader?: Loader;
    pagination?: Pagination;
    settings?: Settings;
    sort?: Sort;
    states?: States;
    urlParams?: URLParams;
};
export type Addon = {
    id: string;
    name: string;
    project: string;
    type: string;
    user_id: string;
    data: string;
};

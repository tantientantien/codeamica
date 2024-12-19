/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as CoursesIndexImport } from './routes/courses/index'
import { Route as CoursesCourseIdImport } from './routes/courses/$courseId'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const CoursesIndexRoute = CoursesIndexImport.update({
  id: '/courses/',
  path: '/courses/',
  getParentRoute: () => rootRoute,
} as any)

const CoursesCourseIdRoute = CoursesCourseIdImport.update({
  id: '/courses/$courseId',
  path: '/courses/$courseId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/courses/$courseId': {
      id: '/courses/$courseId'
      path: '/courses/$courseId'
      fullPath: '/courses/$courseId'
      preLoaderRoute: typeof CoursesCourseIdImport
      parentRoute: typeof rootRoute
    }
    '/courses/': {
      id: '/courses/'
      path: '/courses'
      fullPath: '/courses'
      preLoaderRoute: typeof CoursesIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/courses/$courseId': typeof CoursesCourseIdRoute
  '/courses': typeof CoursesIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/courses/$courseId': typeof CoursesCourseIdRoute
  '/courses': typeof CoursesIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/courses/$courseId': typeof CoursesCourseIdRoute
  '/courses/': typeof CoursesIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/courses/$courseId' | '/courses'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/courses/$courseId' | '/courses'
  id: '__root__' | '/' | '/courses/$courseId' | '/courses/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CoursesCourseIdRoute: typeof CoursesCourseIdRoute
  CoursesIndexRoute: typeof CoursesIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CoursesCourseIdRoute: CoursesCourseIdRoute,
  CoursesIndexRoute: CoursesIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/courses/$courseId",
        "/courses/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/courses/$courseId": {
      "filePath": "courses/$courseId.tsx"
    },
    "/courses/": {
      "filePath": "courses/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
